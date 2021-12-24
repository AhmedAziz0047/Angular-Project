import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import  volsL from 'vols.json';
import {FlightsService} from 'src/app/services/flights.service';


@Component({
  selector: 'app-vols',
  templateUrl: './vols.component.html',
  styleUrls: ['./vols.component.css']
})
export class VolsComponent  implements OnInit {
  public flightsList:any=[];

  constructor(private fservice:FlightsService) { }


ngOnInit(): void {
    this.fservice.all().subscribe(
      res=>{this.flightsList=res;console.log(this.flightsList);},error=>{console.log(error)}

      );


}





}
