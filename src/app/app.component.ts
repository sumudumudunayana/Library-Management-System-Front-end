import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddBooksPageComponent } from './page/add-books-page/add-books-page.component';
import { NavBarComponent } from './common/nav-bar/nav-bar.component';
import { CommonModule } from '@angular/common';
import { ManageBooksPageComponent } from './page/manage-books-page/manage-books-page.component';
import { AddMembersPageComponent } from './page/add-members-page/add-members-page.component';
import { ManageMembersPageComponent } from './page/manage-members-page/manage-members-page.component';
import { DashBoardComponent } from './common/dash-board/dash-board.component';
import { AddBorrowerPageComponent } from './page/add-borrower-page/add-borrower-page.component';
import { ManageBorrowerPageComponent } from './page/manage-borrower-page/manage-borrower-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AddBooksPageComponent,NavBarComponent,ManageBooksPageComponent,CommonModule,AddMembersPageComponent,ManageMembersPageComponent,DashBoardComponent,AddBorrowerPageComponent,ManageBorrowerPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Library-Management-System-Front-end';
}
