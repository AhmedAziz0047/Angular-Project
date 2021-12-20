import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashbordComponent } from './admin-dashbord.component';

const routes: Routes = [
  { path: '', component: AdminDashbordComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminDashbordRoutingModule { }
