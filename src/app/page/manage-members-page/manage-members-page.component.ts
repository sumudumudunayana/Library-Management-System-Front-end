import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-manage-members-page',
  standalone: true,
  imports: [FormsModule,CommonModule,HttpClientModule],
  templateUrl: './manage-members-page.component.html',
  styleUrl: './manage-members-page.component.css'
})
export class ManageMembersPageComponent {

  public searchQuery: string = '';

  public memberList:any = [];

  constructor(private http: HttpClient) {
    this.loadTable();
  }

  loadTable(){
    this.http.get("http://localhost:8080/member/get-allMembers").subscribe(data =>{
      console.log(data);
      this.memberList = data;
    })
  }


  deleteMember(memberId:number){
    this.http.delete(`http://localhost:8080/member/deleteMember-by-id/${memberId}`).subscribe(data => {
      this.deleteSuccessAlert();
      this.loadTable();
    })
  }

  public memberTemp:any = {}
  updateMember(member:any){
    console.log(member);
    this.memberTemp = member;
  }

  saveMember(){
    this.http.put("http://localhost:8080/member/update-member",this.memberTemp).subscribe(data => {
      this.updateSuccessAlert();
      this.loadTable();
    })
  }


  searchMember(searchQuery: string) {
    if (!searchQuery || searchQuery.trim() === '') {
      this.loadTable();
      return;
    }
    const memberId = parseInt(searchQuery);

    if (isNaN(memberId)) {
      this.errorAlert();
      return;
    }

    this.http.get(`http://localhost:8080/member/searchMember-by-id/${memberId}`)
      .subscribe({
        next: (response: any) => {
          console.log('Search response:', response);
          if (response) {
            this.memberList = [response];
          } else {
            this.memberList = [];
            this.noBookErrorAlert();
          }
        },
      });
  }


  public deleteSuccessAlert(){
    Swal.fire({
      title: "The Member Deleted Successfully?",
      icon: "success",
      background:"#fff",
    });
  }

  public updateSuccessAlert(){
    Swal.fire({
      title: "The Member Updated Successfully?",
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
      title: "No Member found with this ID",
      icon: "question",
      background:"#fff",
    });
  }



}
