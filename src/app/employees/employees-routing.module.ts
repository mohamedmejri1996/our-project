import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailEmployeeComponent } from './detail-employee/detail-employee.component';
import { EmployeesComponent } from './employees.component';

const routes: Routes = [
{ path: '', component: EmployeesComponent },
{ path: 'detail/:idemployee', component: DetailEmployeeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
