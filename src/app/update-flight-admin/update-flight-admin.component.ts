import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { FlightsService } from '../services/flights.service';

@Component({
  selector: 'app-update-flight-admin',
  templateUrl: './update-flight-admin.component.html',
  styleUrls: ['./update-flight-admin.component.css']
})
export class UpdateFlightAdminComponent implements OnInit {

  constructor(private _flight: FlightsService , private  route: ActivatedRoute,private  router: Router) { }

  id: any;
  flight = {

    country: "",
    date_aller: "",
    date_retour: "",
    prix: 0,
    Remaining_Seats: 0,
    photo: ""

  };

  fl: any;

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    this._flight.getbyid(this.id).subscribe(
      res=>{
        this.fl= res;
        this.flight = this.fl
      }
    );


  }
  navigate(){
    this.router.navigate(['/adminnav/adminflights']);
  }

  update(){

    this._flight.update(this.id , this.flight).subscribe(
      res=>{

      }
    );

  }

}
