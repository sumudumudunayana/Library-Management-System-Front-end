import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-manage-borrower-page',
  standalone: true,
  imports: [FormsModule,CommonModule,HttpClientModule],
  templateUrl: './manage-borrower-page.component.html',
  styleUrl: './manage-borrower-page.component.css'
})
export class ManageBorrowerPageComponent {

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
      alert("Book deleted successfully");
      this.loadTable();
    })
  }

  public borrowerTemp:any = {}
  updateBorrower(borrower:any) {
    console.log(borrower);
    this.borrowerTemp = borrower;
  }

  saveBorrower(){
    this.http.put("http://localhost:8080/book/update-book",this.borrowerTemp).subscribe(data => {
      alert("Borrower updated successfully");
      this.loadTable();
    })
  }


}
