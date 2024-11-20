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
  };

  constructor(private http:HttpClient){}

  public onSubmit() {
    this.http.post("http://localhost:8080/borrower/add-borrower",this.borrower).subscribe((data)=>{
      this.successAlert();
      this.resetForm();
    });

  }

  resetForm() {
    this.borrower = {
      membersId:'',
      booksId:'',
      duration:'',
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
