import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Router } from '@angular/router';

import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public registerForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    public authService: AuthService,
    public router: Router
  ) {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      password: ['']
    });
   }

  ngOnInit(): void {
  }

  signupUser() {
    if(this.registerForm.valid) {
      this.authService.signup(this.registerForm.value).subscribe(res => {
        if(res.status == 201) {
          this.registerForm.reset();
          this.router.navigate(['/auth/login']);
        }
      },
      err => {
        if (err.code == 400) {
          this.registerForm.controls['email'].setErrors({used: true});
        }
      });
    }
  }

}
