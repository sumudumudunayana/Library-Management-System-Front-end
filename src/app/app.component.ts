import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddBooksPageComponent } from './page/add-books-page/add-books-page.component';
import { NavBarComponent } from './common/nav-bar/nav-bar.component';
import { CommonModule } from '@angular/common';
import { ManageBooksPageComponent } from './page/manage-books-page/manage-books-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AddBooksPageComponent,NavBarComponent,ManageBooksPageComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Library-Management-System-Front-end';
}
