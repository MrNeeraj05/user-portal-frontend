import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-form.html',
  styleUrls: ['./user-form.css']
})
export class UserForm {
  name: string = '';
  mobile: string = '';
  email: string = '';
  country: string = '';
  company: string = '';
  jobTitle: string = '';

  onSubmit() {
    console.log('User Details:', this.name, this.mobile, this.email, this.country, this.company, this.jobTitle);
    alert('Form submitted successfully!');
  }
}
