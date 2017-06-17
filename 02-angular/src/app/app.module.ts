import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BodegasComponent } from './Component/bodegas/bodegas.component';
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import { NombreComponent } from './Component/nombre/nombre.component';
import { DireccionComponent } from './Component/direccion/direccion.component';
import { CapacidadEnToneladasComponent } from './Component/capacidad-en-toneladas/capacidad-en-toneladas.component';

@NgModule({
  declarations: [
    AppComponent,
    BodegasComponent,
    NombreComponent,
    DireccionComponent,
    CapacidadEnToneladasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
