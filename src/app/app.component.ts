import { Component } from '@angular/core';


/*traer componentes*/
@Component({
  selector: 'app-root', /* Etiqueta HTML para usar el componente*/
  templateUrl: './app.component.html', /* donde está el html del componente */
  styleUrls: ['./app.component.css'] /* el directorio del CSS */
})


/* Desde acá podemos enviar variables */
export class AppComponent {
  title = 'Primera APP'; /*definir el titulo de la pagina*/
  texto = 'Lo que se me de la gana'; /* se puede usar en la app*/
}
