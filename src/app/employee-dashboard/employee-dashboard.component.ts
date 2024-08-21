import { Component } from '@angular/core';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.scss']
})
export class EmployeeDashboardComponent {
  employeeList: any[] = [];
  personList: any = [];

  constructor(private _sharedserve: SharedService, private _router: Router) {
    this.getEmployee();
  }
  getEmployee() {
    this._sharedserve.getEmployeeList().subscribe((res: any) => {
      this.employeeList = res;
      console.log(res);
    })
  }

  getPerson() {
    this._sharedserve.getPerson().subscribe((res: any) => {
      this.personList = res;
      console.log("persons :", res);
    })
  }

  editEmp(emp: any) {
    console.log(emp)
    this._router.navigateByUrl(`update-employee/${emp.id}`)
  }
}


