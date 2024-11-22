import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-dash-board',
  standalone: true,
  imports: [RouterLink,CommonModule,FormsModule,HttpClientModule],
  templateUrl: './dash-board.component.html',
  styleUrl: './dash-board.component.css'
})
export class DashBoardComponent {

  constructor(private router: Router) {}

  totalBooks = 150;
  booksBorrowed = 40;
  booksAvailable = 110;
  mostBorrowedBook = 'The Great Gatsby';
  mostActiveMember = 'John Doe';
  recentActivities = [
      'John Doe borrowed "The Great Gatsby"',
      'Jane Smith returned "To Kill a Mockingbird"',
      'Alice Brown borrowed "1984"',
  ];


  public onAddBooksClick(){
    this.router.navigate(['/AddBooks']);
  }

  public onManageBooksClick(){
    this.router.navigate(['/ManageBooks']);
  }
  public onAddMembersClick(){
    this.router.navigate(['/AddMembers']);
  }
  public onManageMembersClick(){
    this.router.navigate(['/ManageMembers']);
  }
  public onAddBorrowersClick(){
    this.router.navigate(['/AddBorrowers']);
  }
  public onManageBorrowersClick(){
    this.router.navigate(['/ManageBorrowers']);
  }

}
