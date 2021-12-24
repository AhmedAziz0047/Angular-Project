import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReservationsService } from '../services/reservations.service';

@Component({
  selector: 'app-add-reservation-aadmin',
  templateUrl: './add-reservation-aadmin.component.html',
  styleUrls: ['./add-reservation-aadmin.component.css']
})
export class AddReservationAadminComponent implements OnInit {

  constructor(private _reserv: ReservationsService , private  route: ActivatedRoute) { }

  reservation = {

    country: "",
    nomclient: "",
    prenomclient: "",
    email: 0,
  };
  resr:any;
  ngOnInit(): void {
  }
  addReservation(){
    this.resr=this.reservation;
    this._reserv.add(this.resr).subscribe(res=>{});
    console.log(this.resr);
  }
}
