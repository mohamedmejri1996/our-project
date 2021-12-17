import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { employees } from './employee-list';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})


  
export class EmployeesComponent implements OnInit {
  public employeesList : any =[];

  constructor(private employeeService:EmployeeService) { }

  ngOnInit(): void {
    this.employeeService.all().subscribe(
      res => this.employeesList = res
    );
  }

}
