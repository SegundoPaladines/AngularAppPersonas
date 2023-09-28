import { Component } from "@angular/core";

/* Componente */

@Component({
  /* atributos */
  selector:'Personas', /* eqtiqueta HTML de uso */
  templateUrl:'./personas.component.html', /* archivo del componente */
  styleUrls: ['./personas.component.css'],
})
export class PersonasComponent {
  deshabilitar = false;
  titulo = 'bb';
  mensaje = "No se ha agregado ninguna persona";

  agregarPersona(){
    this.mensaje = "Persona agregada";
  }

  /* evento que solo es para property binding
     modificarTitulo(event: Event){
      this.titulo = (<HTMLInputElement>event.target).value;
    }
  */
}
