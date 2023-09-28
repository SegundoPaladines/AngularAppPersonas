import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonasComponent } from './components/personas/personas.component';
import { PersonaComponent } from './components/persona/persona.component';
import { FormsModule } from '@angular/forms'; /* import del FormsModule */

@NgModule({
  declarations: [
    AppComponent, /* Aqui van los componentes a exportar */
    PersonasComponent,
    PersonaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, /* Modulo para trabajar rutas */
    FormsModule, /* Módulo para actualizacion en ambos caminos, recomiendo agregarlos si se usan formularios*/
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
