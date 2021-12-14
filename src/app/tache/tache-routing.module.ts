import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TacheComponent } from './tache.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [{ path: '', component: TacheComponent,},
{path:'details/:tacheid',component: DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TacheRoutingModule { }
