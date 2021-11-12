import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [{ path: 'task', loadChildren: () => import('./tache/tache.module').then(m => m.TacheModule) }];


const routes1: Routes = [{ path: 'employees', loadChildren: () => import('./employees/employees.module').then(m => m.EmployeesModule) }];

const routes2: Routes = [{ path: 'chantier', loadChildren: () => import('./chantier/chantier.module').then(m => m.ChantierModule) }];



@NgModule({
  imports: [RouterModule.forRoot(routes),RouterModule.forRoot(routes1),RouterModule.forRoot(routes2)],
  exports: [RouterModule]
})
export class AppRoutingModule { }








