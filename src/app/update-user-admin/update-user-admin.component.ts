import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../services/users.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-update-user-admin',
  templateUrl: './update-user-admin.component.html',
  styleUrls: ['./update-user-admin.component.css']
})
export class UpdateUserAdminComponent implements OnInit {

  constructor(private toastr: ToastrService,private _user: UsersService , private  route: ActivatedRoute,private  router: Router) { }
  id: any;
  user = {
    name: "",
    email: "",
    password: ""
  };
  fl: any;
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    this._user.getbyid(this.id).subscribe(
      res=>{
        this.fl= res;
        this.user = this.fl
  });}
 
  navigate(){
    this.router.navigate(['/adminnav/adminUser']);
  }

  update(){
  
    this._user.update(this.id , this.user).subscribe(
      res=>{
        this.toastr.success('Successfully update', 'Congatulation')
      },
      err => {  this.toastr.warning('Please verify your infos', 'Warning')}
    );

  }
}
