// import { Injectable } from '@angular/core';
// import { HttpClient } from "@angular/common/http";
// import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) { }
}




@Injectable({
  providedIn: 'root'
})
export class FlightsService {


  private apiUrl = 'http://localhost:3000/api/';

  constructor(private http: HttpClient) { }

  all() {

    return this.http.get(this.apiUrl + 'getFlights');

  }


  getbyid(id: any) {

    return this.http.get(this.apiUrl + 'getFlightbyid/' + id);

  }

   delete(id: any){
     return this.http.delete(this.apiUrl + 'deleteFlight/' + id);
   }


   update(id: any, data: any){
     return this.http.put(this.apiUrl + 'editFlight/' + id , data);
   }


   add(data: any){
     return this.http.post(this.apiUrl + 'addFlight' , data);
   }





}
 // private apiUrl = 'http://localhost:3000/courses'; // json-server
  // private apiUrl = 'https://my-json-server.typicode.com/houcem-h/public_courses_api/courses';
// @Injectable({
//   providedIn: 'root'
// })



// export class FlightsService {
//   apiUrl = 'http://localhost:3000/api/getReservations';
//   constructor(private http:HttpClient) { }
//   getAll():Observable<any>{
//     return this.http.get(this.apiUrl);
//   }

// }
