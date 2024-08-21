import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { ManageEmployeeComponent } from './manage-employee/manage-employee.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { ManageStudentComponent } from './manage-student/manage-student.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'employee-dashboard', component: EmployeeDashboardComponent },
  { path: 'add-employee', component: ManageEmployeeComponent },
  { path: 'student-dashboard', component: StudentDashboardComponent },
  { path: 'add-student', component: ManageStudentComponent },
  { path: 'update-student/:stud_id', component: ManageStudentComponent },
  { path: 'update-employee/:id', component: ManageEmployeeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
