import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-manage-members-page',
  standalone: true,
  imports: [FormsModule,CommonModule,HttpClientModule],
  templateUrl: './manage-members-page.component.html',
  styleUrl: './manage-members-page.component.css'
})
export class ManageMembersPageComponent {

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
      alert("Member deleted successfully");
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
      alert("Member updated successfully");
      this.loadTable();
    })
  }

}
