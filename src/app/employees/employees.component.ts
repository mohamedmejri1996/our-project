import { Component, OnInit } from '@angular/core';
import { employees } from './employee-list';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})


  
export class EmployeesComponent implements OnInit {
  public employeesList = employees;
  

  constructor() { }

  ngOnInit(): void {
  }

}
