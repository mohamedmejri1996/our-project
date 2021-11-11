import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChantierRoutingModule } from './chantier-routing.module';
import { ChantierComponent } from './chantier.component';


@NgModule({
  declarations: [
    ChantierComponent
  ],
  imports: [
    CommonModule,
    ChantierRoutingModule
  ]
})
export class ChantierModule { }
