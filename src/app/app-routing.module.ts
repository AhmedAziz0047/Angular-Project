import { NgModule } from '@angular/core';
import { Routes ,RouterModule } from '@angular/router';
import { ConnectComponent } from './connect/connect.component';
import { HommeComponent } from './homme/homme.component';
import { HotelDetailComponent } from './hotel-detail/hotel-detail.component';
import { HotelComponent } from './hotel/hotel.component';

const Routes:Routes=[
  {path:"",component:HommeComponent},
  {path:"hotel",component:HotelComponent},
  {path:"connect",component:ConnectComponent},
  {path:"detail",component:HotelDetailComponent}
];


@NgModule({
  
  imports: [RouterModule.forRoot(Routes)],
  exports:[RouterModule]
  
})
export class AppRoutingModule { }
