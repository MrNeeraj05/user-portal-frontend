import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


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

  constructor(private router: Router) {}

  onLogin(form: any) {
    if (form.valid) {
      console.log('Login with:', this.email, this.password);
      this.router.navigate(['/user-form']);
    } else {
      alert("Please enter valid Email & Password!");
    }
  }
  
  goToRegister() {
    this.router.navigate(['/register']);
  }
  
}
