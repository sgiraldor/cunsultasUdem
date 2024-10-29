import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {
    this.loginForm = this.fb.group({
      username: [''],
      password: ['']
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      this.userService.getUser(username).subscribe({
        next: (user) => {
          if (user && user.password === password) {
            console.log('Login successful');
            this.router.navigate(['/dashboard']); // Redirigir al dashboard
          } else {
            console.log('Invalid username or password');
          }
        },
        error: (err) => {
          console.error('Error logging in:', err);
        }
      });
    }
  }
}