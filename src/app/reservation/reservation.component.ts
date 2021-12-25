import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { FlightsService } from '../services/flights.service';
import { ReservationsService } from '../services/reservations.service';
@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  constructor(private _reser: ReservationsService ,private flights: FlightsService , private  route: ActivatedRoute,private router:Router) { }
  id:any=this.route.snapshot.paramMap.get("id");
  reservations={
    "country":"",
    "nomclient":"",
    "prenomclient":"",
    "email":""
  }
  flight = {

    country: "",
    date_aller: "",
    date_retour: "",
    prix: 0,
    places_left: 0,
    photo: ""

  };
  rv:any;
  fl:any
  toBeUhpdated:any;
  updated:any;

  placesLeft=0;

  ngOnInit(): void {
      this.flights.getbyid(this.id).subscribe(
        res=>{
          this.fl= res;
          this.placesLeft=this.fl.places_left;
          this.flight = this.fl;console.log(this.placesLeft);
          console.log(this.placesLeft)
        }

    );

  }
  updatePlacesLeft()
  { this.placesLeft=this.placesLeft-1;
    this.flight.country=this.fl.country
    this.flight.date_aller=this.fl.date_aller
    this.flight.date_retour=this.fl.date_retour
    this.flight.photo=this.fl.photo;
    this.flight.places_left=this.placesLeft;
    this.flight.prix=this.fl.prix;
    this.flights.update(this.id , this.flight).subscribe(
      res=>{});
  }
  addReservation()
    { this.rv=this.reservations;
      this._reser.add(this.rv).subscribe(res=>{});
      this.updatePlacesLeft();




    }



}
