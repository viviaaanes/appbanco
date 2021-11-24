import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TelaappModule } from './telaapp/telaapp.module';
import { PlanosclienteModule } from './planoscliente/planoscliente.module';
import { InfosModule } from './infos/infos.module';
import { SelfieclienteModule } from './selfiecliente/selfiecliente.module';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';





@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    InfosModule,
    SelfieclienteModule,
    PlanosclienteModule,
    TelaappModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
