import { Component } from '@angular/core';
import { ConfirmationService, Message, PrimeNGConfig } from 'primeng/api';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CourseServiceService } from '../service/course-service.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css'],
  providers: [ConfirmationService]
})

export class CourseDetailsComponent {
  courseArray: any[] = [];
  isResultLoaded = false;
  isUpdateFormActive = false;

  course_code: string = "";
  course_name: string = "";
  course_description: string = "";
  courseMainId = "";
  // position: string | undefined;
  // value: string;
  selectedtype: any;
  // coursetype: any[];
  msgs: Message[] = [];
  // columns: { header: string; field: string; visible: boolean; }[];
  courseForm!: FormGroup;
  bodyData: any;
  constructor(private confirmationService: ConfirmationService, private primengConfig: PrimeNGConfig, private fb: FormBuilder,private service : CourseServiceService) {
    this.courseForm = this.fb.group({
      courseId: ['', Validators.required],
      courseName: ['', Validators.required],
      courseDescription: ['', Validators.required]
    });
    // this.columns = [
    //   { header: 'Code', field: 'code', visible: true },
    //   { header: 'Name', field: 'name', visible: true },
    //   { header: 'Category', field: 'category', visible: true },
    //   { header: 'Quantity', field: 'quantity', visible: true }
    // ];

    // this.coursetype = [
    //   { name: 'Free', type: 'free' },
    //   { name: 'Paid', type: 'paid' },

    // ];
    // this.value = ''

  }

  // sections = [
  //   {
  //     header: 'Section I',
  //     selected: true,
  //     content: ''
  //   }
  // ];
  




  // updateSectionHeaders() {
  //   this.sections.forEach((section, index) => {
  //     section.header = `Section ${index + 1}`;
  //   });
  // }
  // addNewSection() {
  //   const newSection = {
  //     header: `Section ${this.sections.length + 1}`,
  //     selected: false,
  //     content: ''
  //   };
  //   this.sections.push(newSection);
  // }

  senddata() {
    let bodyData =
    {
       course_code: this.course_code,
      course_name : this.course_name,
      course_description : this.course_description
    };
    if(bodyData){
    this.service.sendcoursedata(bodyData).subscribe((res : any)=>{
      console.log("Data sent successfully")
    });
  }
  }
  ngOnInit() {
    this.primengConfig.ripple = true;
    this.senddata()
    // let bodyData =
    // {
    //   "course_id": this.course_id,
    //   "course_name": this.course_name,
    //   "course_description": this.course_description
    // };
    // console.log(bodyData)
    // this.courseForm = this.fb.group({
    //   courseId: ['', Validators.required],
    //   courseName: ['', Validators.required],
    //   courseDescription: ['', Validators.required]
    // });

  }
  // confirm1(section: any) {
  //   this.confirmationService.confirm({
  //     message: 'Do you want to delete this record?',
  //     header: 'Delete Confirmation',
  //     icon: 'pi pi-info-circle',
  //     accept: () => {
  //       this.msgs = [{ severity: 'info', summary: 'Confirmed', detail: 'Record deleted' }];
  //       const index = this.sections.indexOf(section);
  //       if (index >= 0) {
  //         this.sections.splice(index, 1);
  //         this.updateSectionHeaders();

  //       }
  //     },
  //     reject: () => {
  //       this.msgs = [{ severity: 'info', summary: 'Rejected', detail: 'You have rejected' }];
  //     }
  //   });

  // }







  // save() {
    // let bodyData =
    // {
    //   "course_id": this.course_id,
    //   "course_name": this.course_name,
    //   "course_description": this.course_description
    // };
  //   console.log(bodyData)
  // }


}
