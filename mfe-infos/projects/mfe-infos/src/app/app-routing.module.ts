import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [

    {
        path: '',
        redirectTo: 'infos',
        pathMatch: 'full'
    },

    {
        path: 'infos',
        loadChildren: () =>
            import('./infos/infos.module').then(
                (m) => m.InfosModule
            )

    },

    {
      path: 'selfiecliente',
      loadChildren: () =>
          import('./selfiecliente/selfiecliente.module').then(
              (m) => m.SelfieclienteModule
          )
    },

    {
      path: 'planoscliente',
      loadChildren: () =>
          import('./planoscliente/planoscliente.module').then(
              (m) => m.PlanosclienteModule
          )
    }


];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
