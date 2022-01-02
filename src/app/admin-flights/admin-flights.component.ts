import { Component, OnInit } from '@angular/core';
import { FlightsService } from '../services/flights.service';

@Component({
  selector: 'app-admin-flights',
  templateUrl: './admin-flights.component.html',
  styleUrls: ['./admin-flights.component.css']
})
export class AdminFlightsComponent implements OnInit {

  constructor(private flight: FlightsService) { }

  flights:any;


  ngOnInit(): void {

    this.flight.all().subscribe(
      res=>{
        this.flights = res;
      }
    );

  }
  delete(id:any){
    this.flight.delete(id).subscribe(
      res=>{
        this.ngOnInit();
      }
    );
  }

}
