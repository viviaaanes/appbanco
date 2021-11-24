import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelfieclienteComponent } from './selfiecliente.component';

const routes: Routes = [
  {
    path: '',
    component: SelfieclienteComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SelfieclienteRoutingModule { }
