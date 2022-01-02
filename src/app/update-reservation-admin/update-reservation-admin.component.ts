import { Component, OnInit } from '@angular/core';
import { FlightsService } from '../services/flights.service';
import { ReservationsService } from '../services/reservations.service';
import { ActivatedRoute, Router,ParamMap } from '@angular/router';
@Component({
  selector: 'app-update-reservation-admin',
  templateUrl: './update-reservation-admin.component.html',
  styleUrls: ['./update-reservation-admin.component.css']
})

export class UpdateReservationAdminComponent implements OnInit {

  constructor(private _reser: ReservationsService , private  route: ActivatedRoute, private router:Router) { }

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
  update(){
    this._reser.update(this.id , this.reservation).subscribe(
      res=>{
        this.router.navigate(['/adminnav/adminReservations']).then(()=>{
          window.location.reload()
        }).finally(()=>{window.scrollTo(0,0)})
      }
    );

  }

}
