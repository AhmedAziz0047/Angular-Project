import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    public authService: AuthService,
    private toastr: ToastrService,
    public router: Router
  ) {
    this.loginForm= this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.minLength(6), Validators.required]],
    });
   }
    username=""
    pass=""
  ngOnInit(): void {
  }
  email=""
  passwd=""
   
  loginUser() {
    this.email=String(this.loginForm.controls['email']);
    this.passwd=String(this.loginForm.controls['password'])
   // this.authService.login(this.loginForm.value)
   if(this.email=="admin@admin.com" && this.passwd=="admin123"){
    this.router.navigate(['/adminnav'])
   
        
  }
  else if(this.loginForm.valid) {
    this.authService.login(this.loginForm.value)
      
        // this.loginForm.reset();
        this.toastr.success('You signed up successfully', 'Congatulation');
        this.router.navigate(['/vols'])
  }
  else{this.toastr.warning('Please verify your infos', 'Warning')}

  }

}