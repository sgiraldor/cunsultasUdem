import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-certificado-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CertificadoCardComponent {
  @Input() title!: string;
  @Input() description!: string;
  @Input() price!: number;
  @Input() rating!: number;
  @Input() imageUrl?: string; // Hacer que la propiedad sea opcional
  @Output() cardSelected = new EventEmitter<void>(); // Emitir evento al seleccionar la tarjeta

  onCardClick() {
    this.cardSelected.emit();
  }
}