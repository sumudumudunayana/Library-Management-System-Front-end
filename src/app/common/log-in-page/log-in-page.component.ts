import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-log-in-page',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule, RouterLink],
  templateUrl: './log-in-page.component.html',
  styleUrl: './log-in-page.component.css',
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

    if (username === 'sumudu@gmail.com' && password === '1234') {
      this.successAlert();
      this.router.navigate(['/dashBoard']);
    } else {
      this.errorAlert();
    }
  }

  public successAlert() {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    });
    Toast.fire({
      icon: "success",
      title: "Loged in successfully"
    });
  }

  public errorAlert() {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Invalid username or password. Please try again.',
    });
  }
}
