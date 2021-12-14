import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChantierRoutingModule } from './chantier-routing.module';
import { ChantierComponent } from './chantier.component';
import { DemoNgZorroAntdModule } from '../ng-zorro-antd.module';
import { DetailsComponent } from './details/details.component';


@NgModule({
  declarations: [
    ChantierComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    ChantierRoutingModule,
    DemoNgZorroAntdModule
  ]
})
export class ChantierModule { }
