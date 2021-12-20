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
    ReservationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule, AdminDashbordModule, VehiculeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
