import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { ManageEmployeeComponent } from './manage-employee/manage-employee.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { ManageStudentComponent } from './manage-student/manage-student.component';
import { HomeComponent } from './home/home.component';
import { DatePipe } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeDashboardComponent,
    ManageEmployeeComponent,
    StudentDashboardComponent,
    ManageStudentComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    DatePipe

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
