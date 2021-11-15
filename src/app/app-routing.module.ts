import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VolsComponent } from './vols/vols.component';
import { UserComponent } from './user/user.component';
import { RouterModule,Routes } from '@angular/router';
import { CarsComponent } from './cars/cars.component';



const routes:Routes=[
  { path:'vols',component:VolsComponent },
  { path:'cars',component:CarsComponent },
  
]
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule],
})
export class AppRoutingModule { }
