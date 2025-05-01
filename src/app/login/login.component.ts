import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

interface LoginData {
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

  constructor(private router: Router) {}

  onLogin() {
    // Mock login logic (replace with real API call later)
    const validEmail = 'user@example.com';
    const validPassword = 'password123';

    if (
      this.loginData.email === validEmail &&
      this.loginData.password === validPassword
    ) {
      this.errorMessage = '';
      this.router.navigate(['/']); // Redirect to home on success
    } else {
      this.errorMessage = 'Invalid email or password';
    }
  }
}
