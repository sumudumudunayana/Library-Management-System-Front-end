import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-members-page',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule],
  templateUrl: './add-members-page.component.html',
  styleUrl: './add-members-page.component.css'
})
export class AddMembersPageComponent {

  public member:any={
    memberName:'',
    memberEmail:'',
    memberPhone:'',
    memberAddress:'',
  };

  constructor(private http:HttpClient){}

  public onSubmit(){
    this.http.post("http://localhost:8080/member/add-member",this.member).subscribe((data)=>{
     this.successAlert();
      this.resetForm();
    });
  }

  resetForm(){
    this.member = {
      memberName:'',
      memberEmail:'',
      memberPhone:'',
      memberAddress:'',
    };
  }

  public successAlert(){
    Swal.fire({
      title: "The Member Added Successfully?",
      icon: "success",
      background:"#fff",
    });
  }

}
