import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from './movie';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  email:String
  movieId:number
  movie:Movie
  isUserLoggedIn:boolean

  constructor(private http: HttpClient) {
    this.isUserLoggedIn = false //this will by default be false, when loggedIn it will be true
   }

  public post(data: any): Observable<any> {
   return this.http.post(`http://localhost:9000/api/v2/register`, data)
  }

  public login(creds: any): Observable<any> {
    console.log(creds.email);
    this.email = creds.email
    return this.http.post(`http://localhost:9000/api/v1/login`, creds)
  }

  

}
