import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CourseServiceService } from '../service/course-service.service';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit{
  value: string='';
public getjsonvalue : any;
public postjsonvalue : any;
  coursedetails: any;
  GetData: any;
  constructor(private http : HttpClient, private service : CourseServiceService) {
  
  }
  ngOnInit(){
    this.getcourseAPI()
  }
// public getMethod(){
//   this.http.get('/api/course').subscribe((data)=>{
//   console.log(data);
//   this.getjsonvalue = data;

//   });
// }

// CreateNewList(title:string){
//   return this.web
// }

getcourseAPI() : void{
  this.service.getCourseData().subscribe((response:any)=>{
    this.GetData = response.data;
    console.log(this.GetData,"this.GetData");
  });
}

}


