import { Component, OnInit } from '@angular/core';
import { ReservationsService } from '../services/reservations.service';

@Component({
  selector: 'app-admin-reservations',
  templateUrl: './admin-reservations.component.html',
  styleUrls: ['./admin-reservations.component.css']
})
export class AdminReservationsComponent implements OnInit {

  constructor(private reservation: ReservationsService) { }

  reservations:any;


  ngOnInit(): void {

    this.reservation.all().subscribe(
      res=>{
        this.reservations = res;
      }
    );

  }



  delete(id:any){
    this.reservation.delete(id).subscribe(
      res=>{
        this.ngOnInit();
      }
    );
  }

}
