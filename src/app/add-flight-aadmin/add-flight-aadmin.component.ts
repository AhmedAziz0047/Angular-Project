import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FlightsService } from '../services/flights.service';

@Component({
  selector: 'app-add-flight-aadmin',
  templateUrl: './add-flight-aadmin.component.html',
  styleUrls: ['./add-flight-aadmin.component.css']
})
export class AddFlightAadminComponent implements OnInit {

  constructor(private _flight: FlightsService , private  route: ActivatedRoute) { }
  flight = {

    country: "",
    date_aller: "",
    date_retour: "",
    prix: 0,
    places_left: 0,
    photo: ""

  };

  fl: any;

 ngOnInit(): void {
 }
 addFlight()
   { this.fl=this.flight;
     this._flight.add(this.fl).subscribe(res=>{});
     console.log(this.fl);
   }

}
