import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { VolsComponent } from './vols/vols.component';
import { AppRoutingModule } from './app-routing.module';
import { UserComponent } from './user/user.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarsComponent } from './cars/cars.component';
import { AdminNavComponent } from './admin-nav/admin-nav.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { AdminDashbordModule } from './admin-dashbord/admin-dashbord.module';
import { VehiculeModule } from './modules/vehicule/vehicule.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { ReservationComponent } from './reservation/reservation.component';
import { AdminFlightsComponent } from './admin-flights/admin-flights.component';
import { UsersAdminComponent } from './users-admin/users-admin.component';
import { CarsAdminComponent } from './cars-admin/cars-admin.component';
import { AdminReservationsComponent } from './admin-reservations/admin-reservations.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UpdateFlightAdminComponent } from './update-flight-admin/update-flight-admin.component';
import { UpdateReservationAdminComponent } from './update-reservation-admin/update-reservation-admin.component';
import { AddFlightAadminComponent } from './add-flight-aadmin/add-flight-aadmin.component';
import { AddReservationAadminComponent } from './add-reservation-aadmin/add-reservation-aadmin.component';
// import {MatInputModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    VolsComponent,
    UserComponent,
    NavbarComponent,
    CarsComponent,
    AdminNavComponent,
    SignupComponent,
    LoginComponent,
    FooterComponent,
    NotFoundComponent,
    ReservationComponent,
    AdminFlightsComponent,
    UsersAdminComponent,
    CarsAdminComponent,
    AdminReservationsComponent,
    UpdateFlightAdminComponent,
    UpdateReservationAdminComponent,
    AddFlightAadminComponent,
    AddReservationAadminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule, AdminDashbordModule, VehiculeModule,HttpClientModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
