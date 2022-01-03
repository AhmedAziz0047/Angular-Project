import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../services/users.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-add-user-admin',
  templateUrl: './add-user-admin.component.html',
  styleUrls: ['./add-user-admin.component.css']
})
export class AddUserAdminComponent implements OnInit {

  constructor(   private toastr: ToastrService,private _user: UsersService , private  route: ActivatedRoute) { }
  user = {
    name: "",
    email: "",
    password: ""
  };
  fl: any;

  ngOnInit(): void {
  }
  addUser()
  { this.fl=this.user;
    this.toastr.warning('Please verify your infos', 'Warning')
    this._user.add(this.fl).subscribe(res=>{
      this.toastr.success('Successfully addition', 'Congatulation')
    });
    console.log(this.fl);
  }

}
