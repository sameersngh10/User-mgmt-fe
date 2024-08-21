import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedService } from '../shared.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-manage-student',
  templateUrl: './manage-student.component.html',
  styleUrls: ['./manage-student.component.scss']
})
export class ManageStudentComponent {
  studentForm: FormGroup;
  departmentList: any = []
  action = "ADD"
  studId = 0

  constructor(private _fb: FormBuilder, private _sharedservices: SharedService, private _activatedroute: ActivatedRoute) {
    this.studentForm = this._fb.group({
      stud_firstname: ['', [Validators.required]],
      stud_lastname: ['', [Validators.required]],
      dept_id: ['', [Validators.required]],
      stud_type: ['']
    })
    this.getDepartmentList();

    if ('stud_id' in this._activatedroute.snapshot.params) {
      this.action = "UPDATE";
      this.studId = this._activatedroute.snapshot.params['stud_id'];
      console.log(this.studId);
      this.getStudentById(this.studId);
    }
  }
  getDepartmentList() {
    this._sharedservices.getDepartment().subscribe((res: any) => {
      this.departmentList = res;
    });
  }

  getStudentById(stud_id: number) {
    this._sharedservices.getStudentById(stud_id).subscribe((res: any) => {
      console.log("by stud_id", res)
      this.studentForm.patchValue(res);

    })
  }

  save() {

    const formData = this.studentForm.getRawValue()
    console.log(formData)

    if (this.action == 'ADD') {
      this._sharedservices.addStudent(formData).subscribe((res: any) => {
        console.log(res)

      })
    }
    else {
      formData['stud_Id'] = this.studId;
      this._sharedservices.updateStudent(this.studentForm).subscribe((res: any) => {

      })
    }

  }
}
