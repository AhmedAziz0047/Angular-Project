import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { FlightsService } from '../services/flights.service';
import { ReservationsService } from '../services/reservations.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  constructor(private toastr: ToastrService, private _reser: ReservationsService ,private flights: FlightsService , private  route: ActivatedRoute,private router:Router) { }
  id:any=this.route.snapshot.paramMap.get("id");
  nom_ver = false;prenom_ver = false;email_ver = false;
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
    Remaining_Seats: 0,
    photo: ""

  };
  rv:any;
  fl:any
  toBeUhpdated:any;
  updated:any;



  RemainingSeats=0;

  ngOnInit(): void {
      this.flights.getbyid(this.id).subscribe(
        res=>{
          this.fl= res;
          this.RemainingSeats=this.fl.Remaining_Seats;
          this.flight = this.fl;
          console.log(this.RemainingSeats);
          console.log(this.RemainingSeats)
        }

    );

  }
  updatePlacesLeft()
  { this.RemainingSeats=this.RemainingSeats-1;
    this.flight=this.fl
    this.flight.Remaining_Seats=this.RemainingSeats
    this.flights.update(this.id , this.flight).subscribe(
      res=>{

      });
  }
  addReservation()
    {
      let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if(this.reservations.prenomclient.length<3||this.reservations.prenomclient.length>15){
        this.prenom_ver=true;this.toastr.warning("Warning","Verify your name");return;
      }this.prenom_ver=false
      if(this.reservations.nomclient.length<3||this.reservations.nomclient.length>15){
        this.nom_ver=true;this.toastr.warning("Warning","Verify your last name");return;
      }this.nom_ver=false
      if(!re.test(this.reservations.email)){
        this.email_ver=true;this.toastr.warning("Warning","Verify your email");return;
      }this.email_ver=false
      this.reservations.country=this.flight.country;
      this.rv=this.reservations;
      this._reser.add(this.rv).subscribe(res=>{

        this.toastr.success('You will receive your confimation number soon', 'Congatulation')
        this.router.navigate(['/vols'])
      },err=>{
        this.toastr.warning("Warning","Verify your infos")      });
      this.updatePlacesLeft();




    }



}
