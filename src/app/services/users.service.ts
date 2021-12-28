import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { Observable, Subject } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) { }
}




@Injectable({
  providedIn: 'root'
})
export class UsersService {


  private apiUrl = 'http://localhost:3000/api/';

   constructor(private http: HttpClient) { }
  // private _refreshNeeded$=new Subject<void>();

  // get refreshNeeded (){
  //   return this._refreshNeeded$;
  // }

  all() {

    return this.http.get(this.apiUrl + 'getUsers');

  }


  getbyid(id: any) {

    return this.http.get(this.apiUrl + 'getUserbyid/' + id);

  }

   delete(id: any){
     return this.http.delete(this.apiUrl + 'deleteUser/' + id);
   }


   update(id: any, data: any){
     return this.http.put(this.apiUrl + 'editUser/' + id , data);
   }


   add(data: any){
     return this.http.post(this.apiUrl + 'addUser' , data);
   }}