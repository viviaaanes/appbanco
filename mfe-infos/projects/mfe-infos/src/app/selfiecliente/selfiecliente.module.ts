import { SelfieclienteComponent } from './selfiecliente.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SelfieclienteRoutingModule } from './selfiecliente-routing.module';


@NgModule({
  declarations: [SelfieclienteComponent],
  imports: [
    CommonModule,
    SelfieclienteRoutingModule,

  ]
})
export class SelfieclienteModule { }
