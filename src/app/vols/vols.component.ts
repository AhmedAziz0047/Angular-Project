import { HttpClient } from '@angular/common/http';
import { Component, OnInit,Input } from '@angular/core';
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
  public filteredflightsList:any=[];

  constructor(private fservice:FlightsService) { }


ngOnInit(): any {
    this.fservice.all().subscribe(
      res=>{this.flightsList=res;
        for(let i=0;i< this.flightsList.length;i++){
              if(this.flightsList[i].Remaining_Seats>0){
               this.filteredflightsList.push(this.flightsList[i])
              };console.log(this.filteredflightsList);
        }
      },error=>{console.log(error)}
      );



}





}
