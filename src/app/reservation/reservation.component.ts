import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReservationsService } from '../services/reservations.service';
@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  constructor(private _reser: ReservationsService , private  route: ActivatedRoute) { }
   reservations={
    "country":"",
    "nomclient":"",
    "prenomclient":"",
    "email":""
  }
  rv:any;

  ngOnInit(): void {
  }
  addReservation()
    { this.rv=this.reservations;
      this._reser.add(this.rv).subscribe(res=>{});
      console.log(this.rv);
    }
}
