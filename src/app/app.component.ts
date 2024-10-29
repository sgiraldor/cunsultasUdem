import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './components/login/login.component'; // Importar el componente standalone
import { HeaderComponent } from './components/header/header.component'; // Importar el componente standalone
import { FooterComponent } from './components/footer/footer.component'; // Importar el componente standalone
import { DashboardComponent } from './components/dashboard/dashboard.component'; // Importar el componente standalone
import { RegisterComponent } from './components/register/register.component'; // Importar el componente standalone

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    RegisterComponent
  ], // Importar los componentes standalone aquí
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Corrección de 'styleUrl' a 'styleUrls'
})
export class AppComponent {
  title = 'university-portal';
}