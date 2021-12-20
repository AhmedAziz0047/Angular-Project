import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VolsComponent } from './vols/vols.component';
import { UserComponent } from './user/user.component';
import { RouterModule,Routes } from '@angular/router';
import { CarsComponent } from './cars/cars.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AdminNavComponent } from './admin-nav/admin-nav.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ReservationComponent } from './reservation/reservation.component';



const routes:Routes=[
  {path:'reservation',component:ReservationComponent},
  { path:'vols',component:VolsComponent },
  { path:'adminnav',component:AdminNavComponent},
  { path:'cars',component:CarsComponent },
  { path:'login',component:LoginComponent},
  { path:'signup',component:SignupComponent },
  { path:'**',component:NotFoundComponent },
  { path: 'dash', loadChildren: () => import('./admin-dashbord/admin-dashbord.module').then(m => m.AdminDashbordModule) }


]
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule],
})
export class AppRoutingModule {   }
