import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CourseServiceService } from '../service/course-service.service';
import { TabView } from 'primeng/tabview';
// import * as AWS from 'aws-sdk';
// import { AwsS3Service } from '../Aws/aws-s3.service';





interface Row {
  course_name: string;
  chapter_name: string;
  question: string;
  answer: string;
  course_code: string;
  video_link: string;
  module_no: string;
}
interface questiontype {
  name: string;
  code: string;
}
@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})

export class QuestionsComponent implements OnInit {
createp_content!: boolean;
create_qcontent!: boolean;
createquizcontent() {
this.create_qcontent = true;
}
createpractice() {
this.createp_content = true;
}
  emptyArrays() {
this.filter_p_data = [];
this.filter_data = [];
console.log("closed");

}
 
createcontent!: boolean;
createnew() {
this.createcontent = true; 
}
nexttab(tabView: TabView, nextTabIndex: number) {
  tabView.activeIndex = nextTabIndex;

}
  practice_cdata: any;
  GetcontentData: any[] = [];
  deletedRow: any;
  editedRow: any;
  value: any;
  course_content = true;
  quiz_content = true;
  practice_content = true;
  filteredData: any[] = this.GetcontentData;
  searchQuery: string = '';
  editedData: any;
  optionsadd: any;
  deletequizrow: any;
  searchquizdata: string = '';
  filteredQuizData: any[] = [];
  questions: any;
  search: string = '';
  selectedCourseCode: any;
  mcqQuestions: any;
  tofQuestions: any;
  pdata: any[] =[];
  practicecdata: any;
  // ,private awsS3Service: AwsS3Service
  constructor(private service: CourseServiceService) {
    
   }
  rows: Row[] = [];
  rowdata: Row = {
    course_name: '',
    chapter_name: '',
    question: '',
    answer: '',
    video_link: '',
    course_code: '',
    module_no: ''
  };
  questiontype!: questiontype[];
  filterpracticedata : any;
  @ViewChild('tabView') tabView!: TabView;
  ngOnInit() {
    this.questiontype = [
      { name: 'Select Type', code: '' },
      { name: 'Multiple choice questions', code: 'MCQ' },
      { name: 'True or false', code: 'TOF' },

    ];
    this.getdata();
    this.getquizdata();
    this.getpracticedata();
    this.sendModuleNo(this.module_no);
    this.sendcourse_name(this.filterpracticedata);
    this.filteredQuizData = this.questions;
    this.pdata = this.practicecdata;
    console.log(this.pdata);
    
  }
module_no : any;
  filter_p_data : any;
  showpractice_content = false;
  course_c_name:any;
  sendModuleNo(course_name: any) {
this.course_c_name = course_name;
    console.log(course_name);
    
    this.service.sendmoduleno(course_name).subscribe((res : any) => {
      this.filter_p_data = res.data;
      console.log(this.filter_p_data,"filtered pdata");
      
      console.log("Updated successfully")
    });
  }
  filter_data:any;
  sendcourse_name(course_name: any) {
    console.log(course_name);
    
    this.service.sendcoursename(course_name).subscribe((res : any) => {
      this.filter_data = res.data;
      console.log(this.filter_p_data,"filtered pdata");
      
      console.log("Updated successfully")
    });
  }
  showcontent(){
    this.showpractice_content = true;
  }
  addRow() {
     this.rowdata = {
      course_name: this.rowdata.course_name,
      chapter_name: this.rowdata.chapter_name,
      question: this.rowdata.question,
      answer: this.rowdata.answer,
      video_link: this.rowdata.video_link,
      course_code: this.rowdata.course_code,
      module_no: this.rowdata.module_no
    };
    this.rows.push(this.rowdata);
    console.log(this.rowdata);
    
    if (this.rowdata) {
      this.service.sendcontentdata(this.rowdata).subscribe((res: any) => {
      this.getdata();
        console.log("Data sent successfully")
      });
    }
    // this.quiz_content = false;
    this.practice_content = false;
  }

  getdata(): void {
    this.service.getcontentdata().subscribe((response: any) => {
      this.GetcontentData = response.data;
      this.filteredData = this.GetcontentData;
      console.log(this.GetcontentData, "Data Fetched Successfully");
    });
  }
  getpracticedata(): void {
    this.service.getpracticedata().subscribe((response: any) => {
      this.practicecdata = response.data;
      console.log(this.practicecdata, "---------------> data");
    });
  }



  deleteRow(row: any) {
    this.deletedRow = row;
    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      body: { delete_data: this.deletedRow }
    };
    this.service.deletedata(options).subscribe((deletedata: any) => {
    this.getdata();
    console.log(deletedata), "Deleted Successfully";
    });
    console.log(this.deletedRow, "---------> Deleted successfully")
  }
  // isEditing = false;

  editRow(row: any) {
    this.GetcontentData.forEach((r: any) => {
      r.isBeingEdited = (r === row);
    });

  }
  editpRow(i: any) {
    this.practicecdata.forEach((data: any) => {
      data.isBeingEdited = (data === i);
    });

  }
  save(row: any) {
    // save changes to row
    row.isBeingEdited = false;
    this.editedRow = row;
    console.log(this.editedRow);
    
    if (this.editedRow) {
      this.service.updatecontent(this.editedRow).subscribe((res) => {
        console.log("Updated successfully")
      });

    }
    console.log(this.editedRow, "-->Edited row")

  }
  refreshPage() {
    location.reload();
  }
  loading = [false, false, false, false]

  load(index: any) {
    this.loading[index] = true;
    setTimeout(() => this.loading[index] = false, 1000);
  }
  onSearch(query: string) {
    this.filteredData = this.GetcontentData.filter((row: { course_name: string; }) =>
      row.course_name.toLowerCase().includes(query.toLowerCase())
    );
  }



  // onSearch(data: string) {
  //   this.filteredQuizData = this.questions.filter((row: { question: string; }) =>
  //     row.question.toLowerCase().includes(data.toLowerCase())
  //   );
  // }


  newQuestion: any = {
    course_name: '',
    question: '',
    option1: '',
    option2: '',
    option3: '',
    option4: '',
    answer: '',
    // module_no: '',
    selectedtype: ''
  };



  onSubmit() {
    // Add the new question to the list
    // this.questions.push(this.newQuestion);

    // Clear the form
    this.newQuestion = {
      course_name: this.newQuestion.course_name,
      question: this.newQuestion.question,
      option1: this.newQuestion.option1,
      option2: this.newQuestion.option2,
      option3: this.newQuestion.option3 || null,
      option4: this.newQuestion.option4 || null,
      answer: this.newQuestion.answer,
      // module_no: this.newQuestion.module_no,
      selectedtype: this.newQuestion.selectedtype.name
    };
    this.getquizdata();
    console.log(this.newQuestion);
    console.log(this.rowdata);
    
    this.service.sendquizdata(this.newQuestion).subscribe(
      (res: any) => {
        console.log("Data sent successfully")
      });
    // this.service.sendpracticedata(this.practicedata).subscribe(
    //   (res: any) => {
    //     console.log("Data sent successfully")
    //   });
    //   if (this.rowdata) {
    //     this.service.sendcontentdata(this.rowdata).subscribe((res: any) => {
    //     this.getdata();
    //       console.log("Data sent successfully")
    //     });
    //   }
    //   this.service.sendquizdata(this.newQuestion).subscribe(
    //     (res: any) => {
    //       console.log("Data sent successfully")
    //   });
  this.practice_content = false;
  
  }

  practicedata: any = {
    sentence: '',
    answer: '',
    hint: '',
    course_name: '',
    p_question:''
  }



  addpracticedata() {
    // Add the new question to the list
    // this.questions.push(this.newQuestion);

    // Clear the form
    this.practicedata = {
      sentence: this.practicedata.sentence,
      answer: this.practicedata.answer,
      hint: this.practicedata.hint,
      course_name: this.practicedata.course_name,
      p_question: this.practicedata.p_question,
    };
    this.getpracticedata();
    this.getdata();
    console.log(this.practicedata);
    console.log(this.rowdata);
    console.log(this.newQuestion);
    
    this.quiz_content = false;
    this.service.sendpracticedata(this.practicedata).subscribe(
      (res: any) => {
        console.log("Data sent successfully")
      });
    //   if (this.rowdata) {
    //     this.service.sendcontentdata(this.rowdata).subscribe((res: any) => {
    //     this.getdata();
    //       console.log("Data sent successfully")
    //     });
    //   }
    //   this.service.sendquizdata(this.newQuestion).subscribe(
    //     (res: any) => {
    //       console.log("Data sent successfully")
    //   });
    
    

  }

  getquizdata(): void {
    this.service.getquizdata().subscribe((response: any) => {
      this.questions = response.data;
      this.mcqQuestions = this.questions.filter((q: { selectedtype: string; }) => q.selectedtype === 'Multiple choice questions');
      this.tofQuestions = this.questions.filter((q: { selectedtype: string; }) => q.selectedtype === 'True or false');
      console.log(this.mcqQuestions, "MCQ Questions");
      console.log(this.tofQuestions, "TOF Questions");
      console.log(this.questions);

    });
  }
  editdata(index: number) {
    this.questions.forEach((r: any) => {
      r.isBeingEdited = (r === index);
    });
  }

  deletedata(index: number) {
    if (confirm("Are you sure you want to delete this question?")) {
      this.deletequizrow = index;
      const data = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
        body: { delete_data: this.deletequizrow }
      };
      this.service.deletequizdata(data).subscribe((deletedata: any) => {
        console.log(deletedata), "Deleted Successfully";
      });
    }
  }
  updateModuleNo() {

  }
  
  public get uniqueModuleName(): number[] {
    return Array.from(new Set(this.GetcontentData.map((data: { course_name: any; }) => data.course_name)));
  }
  public get uniqueModuleNos(): number[] {
    return Array.from(new Set(this.GetcontentData.map((data: { module_no: any; }) => data.module_no)));
  }
  public get uniquecoursecode(): number[] {
    return Array.from(new Set(this.GetcontentData?.map((data: { course_code: any; }) => data.course_code)));
  }
  selectedTab = 0;
  contentLoaded = false;

  onTabChange(event: any) {
    this.selectedTab = event.index;
    this.contentLoaded = false;
  }

  onContentLoaded() {
    this.contentLoaded = true;
  }
  savedata(index: any) {
    index.isBeingEdited = false;
    this.editedData = index;
    if (this.editedData) {
      this.service.updatequizcontent(this.editedData).subscribe((res: any) => {
        console.log("Updated successfully")
      });

    }
  }

  // onFileSelected(event: any) {
  //   const file = event.target.files[0];
  //   this.awsS3Service.uploadFile(file)
  //     .subscribe(
  //       (data: any) => {
  //         console.log('File uploaded successfully.', data.Location);
  //         // Perform any additional actions upon successful upload
  //       },
  //       (error: any) => {
  //         console.log('Error uploading file:', error);
  //         // Handle error cases
  //       }
  //     );
  // }
  

}