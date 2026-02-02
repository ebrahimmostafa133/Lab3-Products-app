import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  email = '';
  password = '';
  confirmPassword = '';
  authService = inject(AuthService);

  handleRegister() {
    if (this.email && this.password && this.password === this.confirmPassword) {
      this.authService.register(this.email);
    } else {
      alert('Please fill all fields and ensure passwords match');
    }
  }
}
