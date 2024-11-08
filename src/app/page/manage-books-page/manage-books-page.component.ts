import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-manage-books-page',
  standalone: true,
  imports: [FormsModule,CommonModule,HttpClientModule],
  templateUrl: './manage-books-page.component.html',
  styleUrl: './manage-books-page.component.css'
})
export class ManageBooksPageComponent {

  public bookList:any = [];

  constructor(private http: HttpClient) {
    this.loadTable();
  }

  loadTable(){
    this.http.get("http://localhost:8080/book/get-all").subscribe(data =>{
      console.log(data);
      this.bookList = data;
    })
  }

  deleteBook(bookId: number) {
    this.http.delete(`http://localhost:8080/book/delete-by-id/${bookId}`).subscribe(data => {
      alert("Book deleted successfully");
      this.loadTable();
    })
  }

  public bookTemp:any = {}
  updateBook(book:any) {
    console.log(book);
    this.bookTemp = book;
  }

  saveBook(){
    this.http.put("http://localhost:8080/book/update-book",this.bookTemp).subscribe(data => {
      alert("Book updated successfully");
      this.loadTable();
    })
  }

}
