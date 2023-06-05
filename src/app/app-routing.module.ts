import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { CoursesComponent } from './courses/courses.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { QuestionsComponent } from './questions/questions.component';
const routes: Routes = [
  {
    path : 'home', component : NavbarComponent
  },
  {
    path : 'courses', component : CoursesComponent
  },
  {
    path : 'dashboard', component : DashboardComponent
  },
  {
    path : 'questionbanks', component : QuestionsComponent
  },
  {
    path : 'course-details', component : CourseDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
