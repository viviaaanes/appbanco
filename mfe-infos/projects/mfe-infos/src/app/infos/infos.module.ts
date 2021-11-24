import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InfosRoutingModule } from './infos-routing.module';
import { InfosComponent } from './infos.component';


@NgModule({
    declarations: [
       InfosComponent

    ],
    imports: [
        InfosRoutingModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule

    ],


    providers: []
})
export class InfosModule { }
