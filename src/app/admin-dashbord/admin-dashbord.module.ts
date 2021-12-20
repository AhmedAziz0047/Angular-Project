import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashbordRoutingModule } from './admin-dashbord-routing.module';
import { AdminNavComponent } from '../admin-nav/admin-nav.component';
import { AdminDashbordComponent } from './admin-dashbord.component';


@NgModule({
  declarations: [
  AdminDashbordComponent
  ],
  imports: [
    CommonModule,
    AdminDashbordRoutingModule
  ]
})
export class AdminDashbordModule { }
