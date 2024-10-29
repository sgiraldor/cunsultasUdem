import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { CertificadoCardComponent } from './card.component';

describe('CertificadoCardComponent', () => {
  let component: CertificadoCardComponent;
  let fixture: ComponentFixture<CertificadoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, CertificadoCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CertificadoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display title', () => {
    component.title = 'Test Title';
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('Test Title');
  });

  it('should display description', () => {
    component.description = 'Test Description';
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain('Test Description');
  });

  it('should display price', () => {
    component.price = 20000;
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain('COP20,000.00 por certificado');
  });

  it('should display rating', () => {
    component.rating = 4.8;
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.card-rating span').textContent).toContain('4.8');
  });
});