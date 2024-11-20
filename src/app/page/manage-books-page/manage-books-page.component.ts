import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-manage-books-page',
  standalone: true,
  imports: [FormsModule,CommonModule,HttpClientModule],
  templateUrl: './manage-books-page.component.html',
  styleUrl: './manage-books-page.component.css'
})
export class ManageBooksPageComponent {

  public searchQuery: string = '';

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
      this.deleteSuccessAlert();
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
      this.updateSuccessAlert();
      this.loadTable();
    })
  }

  searchBook(searchQuery: string) {
    if (!searchQuery || searchQuery.trim() === '') {
      this.loadTable();
      return;
    }
    const bookId = parseInt(searchQuery);

    if (isNaN(bookId)) {
      this.errorAlert();
      return;
    }

    this.http.get(`http://localhost:8080/book/search-by-id/${bookId}`)
      .subscribe({
        next: (response: any) => {
          console.log('Search response:', response);
          if (response) {
            this.bookList = [response];
          } else {
            this.bookList = [];
            this.noBookErrorAlert();
          }
        }, 
      });
  }

  public deleteSuccessAlert(){
    Swal.fire({
      title: "The Book Deleted Successfully?",
      icon: "success",
      background:"#fff",
    });
  }

  public updateSuccessAlert(){
    Swal.fire({
      title: "The Book Updated Successfully?",
      icon: "success",
      background:"#fff",
    });
  }

  public errorAlert(){
    Swal.fire({
      title: "Please enter a valid numeric ID",
      icon: "error",
      background:"#fff",
    });
  }

  public noBookErrorAlert(){
    Swal.fire({
      title: "No book found with this ID",
      icon: "question",
      background:"#fff",
    });
  }

}

