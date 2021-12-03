import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TacheRoutingModule } from './tache-routing.module';
import { TacheComponent } from './tache.component';
import { DemoNgZorroAntdModule } from '../ng-zorro-antd.module';
import { DetailsComponent } from './details/details.component';


@NgModule({
  declarations: [
    TacheComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    TacheRoutingModule,
    DemoNgZorroAntdModule
  ]
})
export class TacheModule { }
