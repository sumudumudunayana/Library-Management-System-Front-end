import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-borrower-page',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule],
  templateUrl: './add-borrower-page.component.html',
  styleUrl: './add-borrower-page.component.css'
})
export class AddBorrowerPageComponent {

  public borrower:any={
    membersId:'',
    booksId:'',
    duration:'',
    borrowerName :'',
    borrowerContact:'',
  };

  constructor(private http:HttpClient){}

  public onSubmit() {
    if (this.borrower.membersId && this.borrower.booksId && this.borrower.duration && this.borrower.borrowerName && this.borrower.borrowerContact) {
      this.http.post("http://localhost:8080/borrower/add-borrower",this.borrower).subscribe(() => {
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
    this.borrower = {
      membersId:'',
      booksId:'',
      duration:'',
      borrowerName :'',
    borrowerContact:'',
    };
  }

  public successAlert(){
    Swal.fire({
      title: "The Borrower Added Successfully?",
      icon: "success",
      background:"#fff",
    });
  }

}
