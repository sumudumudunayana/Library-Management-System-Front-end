import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-manage-borrower-page',
  standalone: true,
  imports: [FormsModule,CommonModule,HttpClientModule],
  templateUrl: './manage-borrower-page.component.html',
  styleUrl: './manage-borrower-page.component.css'
})
export class ManageBorrowerPageComponent {

  public searchQuery: string = '';

  public borrowerList:any = [];

  constructor(private http: HttpClient) {
    this.loadTable();
  }

  loadTable(){
    this.http.get("http://localhost:8080/borrower/get-all").subscribe(data =>{
      console.log(data);
      this.borrowerList = data;
    })
  }

  deleteBorrower(borrowerId: number) {
    this.http.delete(`http://localhost:8080/borrower/delete-by-id/${borrowerId}`).subscribe(data => {
      this.deleteSuccessAlert();
      this.loadTable();
    })
  }

  public borrowerTemp:any = {}
  updateBorrower(borrower:any) {
    console.log(borrower);
    this.borrowerTemp = borrower;
  }

  saveBorrower(){
    this.http.put("http://localhost:8080/borrower/update-borrower",this.borrowerTemp).subscribe(data => {
      this.updateSuccessAlert();
      this.loadTable();
    })
  }


  searchBorrower(searchQuery: string) {
    if (!searchQuery || searchQuery.trim() === '') {
      this.loadTable();
      return;
    }
    const borrowerId = parseInt(searchQuery);

    if (isNaN(borrowerId)) {
      this.errorAlert();
      return;
    }

    this.http.get(`http://localhost:8080/borrower/search-by-id/${borrowerId}`)
      .subscribe({
        next: (response: any) => {
          console.log('Search response:', response);
          if (response) {
            this.borrowerList = [response];
          } else {
            this.borrowerList = [];
            this.noBookErrorAlert();
          }
        },
      });
  }


  public deleteSuccessAlert(){
    Swal.fire({
      title: "The Borrower Deleted Successfully?",
      icon: "success",
      background:"#fff",
    });
  }

  public updateSuccessAlert(){
    Swal.fire({
      title: "The Borrower Updated Successfully?",
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
      title: "No Borrower found with this ID",
      icon: "question",
      background:"#fff",
    });
  }


}
