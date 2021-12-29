import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
@Component({
  selector: 'app-users-admin',
  templateUrl: './users-admin.component.html',
  styleUrls: ['./users-admin.component.css']
})
export class UsersAdminComponent implements OnInit {

  constructor(private user: UsersService) { }
  users:any;


  ngOnInit(): void {

    this.user.all().subscribe(
      res=>{
        this.users = res;
      }
    );

  }



  delete(id:any){
    this.user.delete(id).subscribe(
      res=>{
        this.ngOnInit();
      }
    );
  }

}
