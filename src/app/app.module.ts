import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HotelComponent } from './hotel/hotel.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { HommeComponent } from './homme/homme.component';
import { ConnectComponent } from './connect/connect.component';
import { HotelDetailComponent } from './hotel-detail/hotel-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HotelComponent,
    NavbarComponent,
    FooterComponent,
    HommeComponent,
    ConnectComponent,
    HotelDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
