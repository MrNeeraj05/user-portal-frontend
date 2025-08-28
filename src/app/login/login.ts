import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.services';   // ✅ add this

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {
  email: string = '';
  password: string = '';

  constructor(private router: Router, private authService: AuthService) {}

  onLogin(form: any) {
    if (form.valid) {
      this.authService.login({ email: this.email, password: this.password }).subscribe({
        next: (res) => {
          console.log('Login Success:', res);
          this.router.navigate(['/user-form']);
        },
        error: (err) => {
          console.error('Login Failed:', err);
          alert("Invalid Email or Password!");
        }
      });
    } else {
      alert("Please enter valid Email & Password!");
    }
  }
  
  goToRegister() {
    this.router.navigate(['/register']);
  }
}
