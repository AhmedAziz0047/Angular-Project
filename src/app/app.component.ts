import { Component } from '@angular/core';
import volsL from './vols/vols.json';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Project';
  volsList:{pays:string,aller:string,retour:string,prix:string}[]=volsL;
}
