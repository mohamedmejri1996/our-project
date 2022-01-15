import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TacheComponent } from './tache/tache.component';





const routes: Routes = [{ path: 'task', loadChildren: () => import('./tache/tache.module').then(m => m.TacheModule) }];
const routes1: Routes = [{ path: 'employees', loadChildren: () => import('./employees/employees.module').then(m => m.EmployeesModule) }];
const routes2: Routes = [{ path: 'chantier', loadChildren: () => import('./chantier/chantier.module').then(m => m.ChantierModule) }];

const routes4: Routes = [{path:'',redirectTo:'login', pathMatch:'full'},
                         {path:'login', component: LoginComponent}];


const routes3: Routes = [{ path: 'map', loadChildren: () => import('./map/map.module').then(m => m.MapModule) }]


@NgModule({
  imports: [RouterModule.forRoot(routes),RouterModule.forRoot(routes1),RouterModule.forRoot(routes2),RouterModule.forRoot(routes3)
           ,RouterModule.forRoot(routes4)],
  exports: [RouterModule],

})
export class AppRoutingModule { }








