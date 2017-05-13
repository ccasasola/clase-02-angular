import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ListaPersonasComponent } from './lista-personas/lista-personas.component';
import { PersonaItemComponent } from './lista-personas/persona-item/persona-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaPersonasComponent,
    PersonaItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [ListaPersonasComponent]
})
export class AppModule { }
