import { Component } from '@angular/core';

@Component({
  selector: 'app-dash-board',
  standalone: true,
  imports: [],
  templateUrl: './dash-board.component.html',
  styleUrl: './dash-board.component.css'
})
export class DashBoardComponent {
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

}
