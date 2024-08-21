import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedService } from '../shared.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-manage-employee',
  templateUrl: './manage-employee.component.html',
  styleUrls: ['./manage-employee.component.scss']
})
export class ManageEmployeeComponent {
  userform: FormGroup;
  departmentList: any = []
  personList: any = []
  action = 'ADD';
  employeeId = 0;
  constructor(private fb: FormBuilder, private _shareSherd: SharedService, private activatedRoute: ActivatedRoute) {
    this.userform = this.fb.group({
      firstname: ["", [Validators.required]],
      lastname: ["", [Validators.required]],
      dept_id: ["", [Validators.required]],
      emp_type: ["", [Validators.required]]
    })

    this.getDepartmentList();
    if ('id' in this.activatedRoute.snapshot.params) {
      this.action = "UPDATE";
      this.employeeId = this.activatedRoute.snapshot.params['id'];
      console.log(this.employeeId);
      this.getEmployeeById(this.employeeId);
    }
  }

  getDepartmentList() {
    this._shareSherd.getDepartment().subscribe((res: any) => {
      this.departmentList = res;
    });
  }



  getEmployeeById(id: number) {
    this._shareSherd.getEmployeeById(id).subscribe((res: any) => {
      console.log('by id', res)
      this.userform.patchValue(res);
    })
  }

  // getEmployeeById(){this._sharedserve.getemployebyId()}

  save() {
    const formData = this.userform.getRawValue();
    console.log(formData)

    if (this.action === "ADD") {
      this._shareSherd.addEmployee(formData).subscribe((res: any) => {
        console.log(res);
      })
    } else {
      formData['id'] = this.employeeId;
      this._shareSherd.updateEmployee(formData).subscribe((res: any) => {

      })
    }

  }
}
