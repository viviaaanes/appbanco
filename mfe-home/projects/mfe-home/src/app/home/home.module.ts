import { HttpClientModule } from '@angular/common/http';
import { MensagemModule } from './../mensagem/mensagem.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        HomeRoutingModule,
        FormsModule,
        CommonModule,
        MensagemModule,
        ReactiveFormsModule,
        HttpClientModule

    ],

    exports:[HomeComponent],

    providers: []
})
export class HomeModule { }
