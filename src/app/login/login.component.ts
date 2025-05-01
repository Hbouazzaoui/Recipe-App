import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';

interface LoginData {
  email: string;
  password: string;
}

interface User {
  id: number;
  email: string;
  password: string;
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginData: LoginData = { email: '', password: '' };
  errorMessage: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  onLogin() {
    this.http.get<User[]>('http://localhost:3000/users').subscribe(
      (users) => {
        const user = users.find(
          (u) =>
            u.email === this.loginData.email &&
            u.password === this.loginData.password
        );
        if (user) {
          this.errorMessage = '';

          this.router.navigate(['/']);
        } else {
          this.errorMessage = 'Invalid email or password';
        }
      },
      (error) => {
        this.errorMessage = 'Error connecting to server';
      }
    );
  }
}
