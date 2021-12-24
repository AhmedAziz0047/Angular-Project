import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})

export class ReservationsService {
  private apiUrl = 'http://localhost:3000/api/';

  constructor(private http: HttpClient) { }

  all() {

    return this.http.get(this.apiUrl + 'getReservations');

  }


  getbyid(id: any) {

    return this.http.get(this.apiUrl + 'getReservbyid/' + id);

  }

   delete(id: any){
     return this.http.delete(this.apiUrl + 'deleteReservations/' + id);
   }


   update(id: any, data: any){
     return this.http.put(this.apiUrl + 'editReservations/' + id , data);
   }


   add(data: any){
     return this.http.post(this.apiUrl + 'addReservations' , data);
   }





}
