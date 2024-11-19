import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-log-in-page',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule,RouterLink],
  templateUrl: './log-in-page.component.html',
  styleUrl: './log-in-page.component.css'
})
export class LogInPageComponent {

   credentials = {
    username: '',
    password: '',
  };
  errorMessage = '';

  constructor(private router: Router) {}

  onSubmit() {
    const { username, password } = this.credentials;

    if (username === 'sumudu' && password === '1234') {
      alert('Login successful!');
      this.router.navigate(['/dashBoard']); 
    } else {
      this.errorMessage = 'Invalid username or password. Please try again.';
    }
  }

}
