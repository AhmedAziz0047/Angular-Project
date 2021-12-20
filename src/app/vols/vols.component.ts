import { Component, OnInit } from '@angular/core';
import  volsL from 'vols.json';
@Component({
  selector: 'app-vols',
  templateUrl: './vols.component.html',
  styleUrls: ['./vols.component.css']
})
export class VolsComponent implements OnInit {
  onAdd(){
    alert('success');
  }
  volsList:{pays:string,aller:string,retour:string,prix:string}[]=volsL;
  img="assets/login.png";
  constructor() { }

  ngOnInit(): void {
    console.log(volsL);
  }

}
