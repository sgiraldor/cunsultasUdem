import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-career-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './career-info.component.html',
  styleUrls: ['./career-info.component.css']
})
export class CareerInfoComponent {
  @Input() career: any; // Recibir la información de la carrera como entrada
  @Output() back = new EventEmitter<void>(); // Emitir evento al hacer clic en "Volver"
}