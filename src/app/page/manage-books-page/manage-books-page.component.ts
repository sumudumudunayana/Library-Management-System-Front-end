import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Book {
  id: number;
  title: string;
  author: string;
  genre: string;
}

@Component({
  selector: 'app-manage-books-page',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './manage-books-page.component.html',
  styleUrl: './manage-books-page.component.css'
})
export class ManageBooksPageComponent {

  books: Book[] = [
    { id: 1, title: 'Angular for Beginners', author: 'John Doe', genre: 'Technology' },
    { id: 2, title: 'Learning TypeScript', author: 'Jane Smith', genre: 'Programming' },
    { id: 3, title: 'JavaScript Essentials', author: 'Alice Brown', genre: 'Web Development' }
  ];

  searchTerm: string = '';

  get filteredBooks(): Book[] {
    return this.books.filter(book =>
      book.title.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  deleteBook(id: number) {
    const confirmDelete = confirm('Are you sure you want to delete this book?');
    if (confirmDelete) {
      this.books = this.books.filter(book => book.id !== id);
      alert('Book deleted successfully!');
    }
  }

}
