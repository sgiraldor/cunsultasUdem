import { Component } from '@angular/core';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCertificate, faAward, faGraduationCap, faBook, faClipboard, faTheaterMasks, faChalkboardTeacher, faUserGraduate, faHandshake } from '@fortawesome/free-solid-svg-icons';
import { CertificadoCardComponent } from '../card/card.component'; // Importar el componente CertificadoCardComponent

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [FontAwesomeModule, CertificadoCardComponent], // Importar CertificadoCardComponent aquí
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(library: FaIconLibrary) {
    library.addIcons(faCertificate, faAward, faGraduationCap, faBook, faClipboard, faTheaterMasks, faChalkboardTeacher, faUserGraduate, faHandshake);
  }

  onCategoryClick(category: string) {
    console.log(`Category clicked: ${category}`);
    // Aquí puedes agregar la lógica para manejar el clic en la categoría
  }
}