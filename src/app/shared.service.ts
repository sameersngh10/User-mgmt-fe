import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private _http: HttpClient) { }

  getDepartment() {
    return this._http.get('http://localhost:3000/department-list');
  }

  addEmployee(empdata: any) {
    return this._http.post('http://localhost:3000/add-emp', empdata);
  }

  getEmployeeList() {
    return this._http.get("http://localhost:3000/get-emplist");
  }

  getEmployeeById(empId: number) {
    return this._http.get(`http://localhost:3000/get-employeebyid?id=${empId}`)
  }

  updateEmployee(empdata: any) {
    return this._http.post(`http://localhost:3000/update-employee`, empdata)
  }

  addStudent(studData: any) {
    return this._http.post(`http://localhost:3000/add-student`, studData)
  }
  getStudentList() {
    return this._http.get(`http://localhost:3000/get-studentlist`)
  }

  getStudentById(stud_id: number) {
    return this._http.get(`http://localhost:3000/get-studentById?stud_id=${stud_id}`)
  }

  updateStudent(studData: any) {
    return this._http.post(`http://localhost:3000//update-student`, studData)
  }


  getPerson() {
    return this._http.get(`http://localhost:3000/get-person`)
  }


  // ek api call bnate hai (jiska nam hai getemployeeByid(){return this._http.post('http://localhost:3000/add-emp)})
}
