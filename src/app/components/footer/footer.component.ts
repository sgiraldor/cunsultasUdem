import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // Agregar CUSTOM_ELEMENTS_SCHEMA aquí
})
export class FooterComponent {

}