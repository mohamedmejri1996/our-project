import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';
import { employees } from '../employee-list';

@Component({
  selector: 'app-detail-employee',
  templateUrl: './detail-employee.component.html',
  styleUrls: ['./detail-employee.component.css']
})
export class DetailEmployeeComponent implements OnInit {
  
  emp: any;
  idemply=this.route.snapshot.params.idemployee;
  constructor(private route : ActivatedRoute,private employeeService:EmployeeService) {}

  ngOnInit(): void {
    this.employeeService.get( this.idemply).subscribe(
      res => this.emp = res
    );
 
  }

  }
 


