import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { employees } from '../employee-list';

@Component({
  selector: 'app-detail-employee',
  templateUrl: './detail-employee.component.html',
  styleUrls: ['./detail-employee.component.css']
})
export class DetailEmployeeComponent implements OnInit {
  public employeesList = employees;
  idemply = this.route.snapshot.params.idemployee ;
  emp :any;
  constructor(private route : ActivatedRoute) {}

  ngOnInit(): void {
    for (var e of this.employeesList) {

      if(e.id==this.idemply){
        this.emp =e ;
      }
    }

  }

}
