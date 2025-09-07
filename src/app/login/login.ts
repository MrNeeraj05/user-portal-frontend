import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.services';

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

  onLogin(form: NgForm) {
    if (form.valid) {
      // MOCK login
      if (this.email === 'test@example.com' && this.password === '123456') {
        console.log('Login success:', this.email);
        
        // Yahan par 'user-form' ki jagah 'freight' page par navigate kiya gaya hai.
        this.router.navigate(['/freight']);
        
      } else {
        alert('Invalid credentials!');
      }
    } else {
      alert('Please fill all fields correctly!');
    }
  }
  

  goToRegister() {
    this.router.navigate(['/register']);
  }
}