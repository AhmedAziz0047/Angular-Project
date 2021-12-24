import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FlightsService } from '../services/flights.service';
import { ReservationsService } from '../services/reservations.service';

@Component({
  selector: 'app-update-reservation-admin',
  templateUrl: './update-reservation-admin.component.html',
  styleUrls: ['./update-reservation-admin.component.css']
})

export class UpdateReservationAdminComponent implements OnInit {

  constructor(private _reser: ReservationsService , private  route: ActivatedRoute) { }

  id: any;
  reservation = {

    country: "",
    nomclient: "",
    prenomclient: 0,
    email: 0,
  };

  rv: any;

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    this._reser.getbyid(this.id).subscribe(
      res=>{
        this.rv= res;
        this.reservation = this.rv
      }
    );


  }

  updateR(){

    this._reser.update(this.id , this.reservation).subscribe(
      res=>{

      }
    );

  }

}
