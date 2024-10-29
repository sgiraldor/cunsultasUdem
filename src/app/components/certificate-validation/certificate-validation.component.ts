import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-certificate-validation',
  standalone: true,
 imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './certificate-validation.component.html',
  styleUrls: ['./certificate-validation.component.css']
})
export class CertificateValidationComponent {
  validationForm: FormGroup;
  showCardFields: boolean = false; // Añadir propiedad para mostrar/ocultar campos de tarjeta
  showCreditCardFields: boolean = false; // Añadir propiedad para mostrar/ocultar campos adicionales de tarjeta de crédito
  @Output() back = new EventEmitter<void>(); // Emitir evento al hacer clic en "Volver Atrás"
  @Output() submit = new EventEmitter<void>(); // Emitir evento al hacer clic en "Aceptar"

  constructor(private fb: FormBuilder) {
    this.validationForm = this.fb.group({
      fullName: ['', Validators.required],
      documentNumber: ['', Validators.required],
      paymentMethod: ['', Validators.required],
      cardNumber: [''],
      cvc: [''],
      expiryDate: [''],
      cardHolderName: ['']
    });
  }

  onPaymentMethodChange() {
    const paymentMethod = this.validationForm.get('paymentMethod')?.value;
    this.showCardFields = paymentMethod === 'debit' || paymentMethod === 'credit';
    this.showCreditCardFields = paymentMethod === 'credit';
    if (this.showCardFields) {
      this.validationForm.get('cardNumber')?.setValidators([Validators.required]);
      this.validationForm.get('cvc')?.setValidators([Validators.required]);
      this.validationForm.get('expiryDate')?.setValidators([Validators.required]);
    } else {
      this.validationForm.get('cardNumber')?.clearValidators();
      this.validationForm.get('cvc')?.clearValidators();
      this.validationForm.get('expiryDate')?.clearValidators();
    }
    if (this.showCreditCardFields) {
      this.validationForm.get('cardHolderName')?.setValidators([Validators.required]);
    } else {
      this.validationForm.get('cardHolderName')?.clearValidators();
    }
    this.validationForm.get('cardNumber')?.updateValueAndValidity();
    this.validationForm.get('cvc')?.updateValueAndValidity();
    this.validationForm.get('expiryDate')?.updateValueAndValidity();
    this.validationForm.get('cardHolderName')?.updateValueAndValidity();
  }

  onBack() {
    this.back.emit();
  }

  onSubmit() {
    if (this.validationForm.valid) {
      this.submit.emit();
    }
  }
}