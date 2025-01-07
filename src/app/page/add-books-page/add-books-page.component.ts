import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-add-books-page',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule],
  templateUrl: './add-books-page.component.html',
  styleUrl: './add-books-page.component.css'
})
export class AddBooksPageComponent {   

  public book:any={
    bookName:'',
    bookAuthor:'',
    bookCategory:'',
    bookPrice:'',
    bookQty:''
  };

  constructor(private http:HttpClient){}


  public onSubmit() {
    if (this.book.bookName && this.book.bookAuthor && this.book.bookCategory && this.book.bookPrice && this.book.bookQty) {
    this.http.post("http://localhost:8080/book/add-book",this.book).subscribe(()=>{
      this.successAlert();
      this.resetForm();
   },
   (error) => {
     console.error('Error:', error);
   }
 );
}
}

  resetForm() {
    this.book = {
      bookName: '',
      bookAuthor: '',
      bookCategory: '',
      bookPrice: '',
      bookQty: ''
    };
  }

  public successAlert(){
    Swal.fire({
      title: "The Book Added Successfully?",
      icon: "success",
      background:"#fff",
    });
  }

}
