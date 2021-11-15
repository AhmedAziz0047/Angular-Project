import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VolsComponent } from './vols/vols.component';
import { UserComponent } from './user/user.component';
import { RouterModule,Routes } from '@angular/router';
import { CarsComponent } from './cars/cars.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';



const routes:Routes=[
  { path:'vols',component:VolsComponent },
  { path:'cars',component:CarsComponent },
  { path:'login',component:LoginComponent},
  { path:'signup',component:SignupComponent },
  
  
]
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule],
})
export class AppRoutingModule { }
