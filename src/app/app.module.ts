import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { VolsComponent } from './vols/vols.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    VolsComponent,
    UserComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
