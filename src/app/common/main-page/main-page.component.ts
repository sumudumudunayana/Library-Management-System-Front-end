import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule, HttpClientModule],
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'] // Corrected here
})
export class MainPageComponent {
  constructor(private router: Router) {}

  public onSubmit() {
    this.router.navigate(['/logIn']);
  }
}
