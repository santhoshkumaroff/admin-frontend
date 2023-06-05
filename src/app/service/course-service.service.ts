import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseServiceService {

  constructor(private http: HttpClient) {  }
  sendmoduleno(course_name: any) {
    return this.http.get(`/api/sendmoduleno/${course_name}`);
  } 
  sendcoursename(course_name: any) {
    return this.http.get(`/api/sendcoursename/${course_name}`);
  } 
  sendquizdata(questions : any){
    return this.http.post('/api/quizcontent/add',questions);
  }
  sendpracticedata(data : any){
    return this.http.post('/api/practicecontent/add',data);
  }
  updatequizcontent( quizdata :any){
    return this.http.put('/api/content/updatequizdata',quizdata);
  }
  deletequizdata(data :any){
    return this.http.delete('/api/deletequizdata',data)

  }
  getquizdata(){
    return this.http.get('/api/quizcontent');
  }


  sendcontentdata(rowdata : any) {
    return this.http.post('/api/content/add',rowdata);  
  }
  getcontentdata(){
    return this.http.get('/api/content_to_admin');
  }
  getCourseData(){
    return this.http.get('/api/course');
  }
  sendcoursedata(bodyData :any){
    return this.http.post('/api/course/add',bodyData);

  }
  // updatepracticecontent(editedRow :any){
  //   return this.http.put('/api/practicecontent/update',editedRow);
  // }
  updatecontent(editedRow :any){
    return this.http.put('/api/content/update',editedRow);
  }
  deletedata( options : any){
    return this.http.delete('/api/deletedata',options);

  }
  getpracticedata(){
    return this.http.get('/api/practicecontent');
  }
}
