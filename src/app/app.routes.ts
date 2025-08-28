import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Register } from './register/register';
import { UserForm } from './user-form/user-form';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: 'user-form', component: UserForm },
];
