import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-admin-nav',
  templateUrl: './admin-nav.component.html',
  styleUrls: ['./admin-nav.component.css']
})
export class AdminNavComponent implements OnInit {

  constructor(private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
  }
  showReservations(){
    this.router.navigate(['adminReservations'],{relativeTo:this.route});
  }

  showFlights(){
       this.router.navigate(['adminflights'],{relativeTo:this.route});
  }
  showCars(){
    this.router.navigate(['adminCars'],{relativeTo:this.route});
  }

  showUsers(){
    this.router.navigate(['adminUser'],{relativeTo:this.route});

  }

}
