import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-certificado-card',
  standalone: true,
  imports: [CommonModule], // Importar CommonModule aquí
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CertificadoCardComponent {
  @Input() title: string = 'Certificado de estudio'; // Título por defecto
  @Input() description: string = 'Descripción breve del certificado';
  @Input() price?: number; // Propiedad opcional para el precio
  @Input() rating: number = 5; // Valoración por defecto
}