import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [{ path: 'employees', loadChildren: () => import('./employees/employees.module').then(m => m.EmployeesModule) }];

const routes: Routes = [{ path: 'chantier', loadChildren: () => import('./chantier/chantier.module').then(m => m.ChantierModule) }];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }








