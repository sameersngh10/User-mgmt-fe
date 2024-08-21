import { Component } from '@angular/core';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.scss']
})
export class StudentDashboardComponent {
  studentlist: any[] = [];

  constructor(private _sharedserve: SharedService, private _router: Router) {
    this.getStudent();
  }
  getStudent() {
    this._sharedserve.getStudentList().subscribe((res: any) => {
      this.studentlist = res;
      console.log(res);
    })
  }

  editStudent(student: any) {
    console.log(student)
    this._router.navigateByUrl(`update-student/${student.stud_id}`)
  }

}
