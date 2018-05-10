import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { ServicioDbService } from './servicios/servicio-db.service'; 
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from  '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { Punto1Component } from './punto1/punto1.component';


@NgModule({
  declarations: [
    AppComponent,
    Punto1Component
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [ServicioDbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
