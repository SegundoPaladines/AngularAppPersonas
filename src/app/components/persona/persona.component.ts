import { Component } from '@angular/core';

@Component({
  selector: 'Persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})

export class PersonaComponent {
    /* atributos publicos */
    nombre :string = 'Juan';
    apellido:string = 'Perez';

    /* Atributos Privados */
    private edad:number = 25;

    getEdad(){
      return this.edad;
    }
}
