import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './components/login/login.component'; // Importar el componente standalone
import { HeaderComponent } from './components/header/header.component'; // Importar el componente standalonimnport 
import { FooterComponent } from './components/footer/footer.component'; // Importar el componente standalone

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginComponent, HeaderComponent, FooterComponent], // Importar el componente standalone aquí
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Corrección de 'styleUrl' a 'styleUrls'
})
export class AppComponent {
  title = 'university-portal';
}