import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanosclienteComponent } from './planoscliente.component';
const routes: Routes = [
  {
    path: '',
    component: PlanosclienteComponent
  }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanosclienteRoutingModule { }
