import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChantierComponent } from './chantier.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [{ path: '', component: ChantierComponent },
{path:'details/:chantierid',component: DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChantierRoutingModule { }
