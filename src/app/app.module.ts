import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { RatingModule } from 'primeng/rating';
import { SliderModule } from 'primeng/slider';
import {InputTextModule} from 'primeng/inputtext';
import {CardModule} from 'primeng/card';
import {AccordionModule} from 'primeng/accordion';
import {ToastModule} from 'primeng/toast';
import {DialogModule} from 'primeng/dialog';
import { NavbarComponent } from './navbar/navbar.component';
import { CoursesComponent } from './courses/courses.component';
import { SplitButtonModule } from 'primeng/splitbutton';
import {DropdownModule} from 'primeng/dropdown';
import {TableModule} from 'primeng/table';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import {InputNumberModule} from 'primeng/inputnumber';
import {FileUploadModule} from 'primeng/fileupload';
import {HttpClientModule} from '@angular/common/http';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {InputTextareaModule} from 'primeng/inputtextarea';
import { QuestionsComponent } from './questions/questions.component';
import { TabViewModule } from 'primeng/tabview';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CoursesComponent,
    DashboardComponent,
    CourseDetailsComponent,
    QuestionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ButtonModule,
    RatingModule,
    SliderModule,
    InputTextModule,
    CardModule,
    AccordionModule,
    ToastModule,
    DialogModule,
    SplitButtonModule,
    DropdownModule,
    TableModule,
    HttpClientModule,
    InputNumberModule,
    FileUploadModule,
    ConfirmDialogModule,
    InputTextareaModule,
    TabViewModule
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
