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

  ngOnInit(): void {
  }

  loginUser() {
    if(this.loginForm.valid) {
    this.authService.login(this.loginForm.value)
    this.toastr.success('You login up successfully', 'Congatulation');
  }else{
    this.toastr.warning('Please verify your infos', 'Warning')
  }}

}