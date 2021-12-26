import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VolsComponent } from './vols/vols.component';
import { UserComponent } from './user/user.component';
import { RouterModule,Routes } from '@angular/router';
import { CarsComponent } from './cars/cars.component';
//import { LoginComponent } from './login/login.component';
import { LoginComponent } from './auth/login/login.component';
//import { SignupComponent } from './signup/signup.component';
import { RegisterComponent } from './auth/register/register.component'
import { AdminNavComponent } from './admin-nav/admin-nav.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ReservationComponent } from './reservation/reservation.component';
import { AdminFlightsComponent } from './admin-flights/admin-flights.component';
import { CarsAdminComponent } from './cars-admin/cars-admin.component';
import { UsersAdminComponent } from './users-admin/users-admin.component';
import { AdminReservationsComponent } from './admin-reservations/admin-reservations.component';
import { UpdateFlightAdminComponent } from './update-flight-admin/update-flight-admin.component';
import { UpdateReservationAdminComponent } from './update-reservation-admin/update-reservation-admin.component';
import { AddReservationAadminComponent } from './add-reservation-aadmin/add-reservation-aadmin.component';
import { AddFlightAadminComponent } from './add-flight-aadmin/add-flight-aadmin.component';



const routes:Routes=[
  {path:'reservation/:id',component:ReservationComponent},
  { path:'vols',component:VolsComponent },
  { path:'',component:VolsComponent },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  {
    path:'adminnav',component:AdminNavComponent,
    children:[
      {path:'adminflights',component:AdminFlightsComponent,children:[
        {path:'adminUpdateFlight/:id',component:UpdateFlightAdminComponent},
        {path:'adminAddFlight',component:AddFlightAadminComponent},
      ]},
      {path:'adminCars',component:CarsAdminComponent},
      {path:'adminUser',component:UsersAdminComponent},
      {path:'adminReservations',component:AdminReservationsComponent,children:[
        {path:'adminUpdateReservation/:id',component:UpdateReservationAdminComponent},
        {path:'adminAddReservation',component:AddReservationAadminComponent},
      ]}
    ]
  },
  { path:'cars',component:CarsComponent },
  //{ path:'login',component:LoginComponent},
  { path:'login',component:LoginComponent},
 // { path:'signup',component:SignupComponent },
 { path:'register',component:RegisterComponent},
  { path:'**',component:NotFoundComponent },
  { path: 'dash', loadChildren: () => import('./admin-dashbord/admin-dashbord.module').then(m => m.AdminDashbordModule) },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) }


]
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule],
})
export class AppRoutingModule {   }
export const routingComponents=[
                                  AdminFlightsComponent,
                                  CarsAdminComponent,
                                  UsersAdminComponent,
                                  AdminReservationsComponent
                                ]
