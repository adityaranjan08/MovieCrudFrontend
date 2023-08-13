import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from './movie';

@Injectable({
  providedIn: 'root'
})
export class MovieCrudService {

  
  constructor(private http:HttpClient) { }

  post(data: any,email:String): Observable<any> {
    const url = "http://localhost:9000/api/v2/user/"+email+"/movie"
    return this.http.post(url, data)      //this will return observable and that we need to subscribe in the methods
  }

  getMovies(email:String): Observable<any> {
    const url = "http://localhost:9000/api/v2/user/"+email+"/"
    const httpHeader = new HttpHeaders({"Content-Type":"application/json",Authorization:`Bearer ${sessionStorage.getItem('token')}` })
    const requestOptions = {headers: httpHeader}
    return this.http.get(url,requestOptions);
  }

  updateMovie(email:String,movie:Movie) : Observable<any> {
    const url = "http://localhost:9000/api/v2/user/"+email+"/"+movie.movieId
    const httpHeader = new HttpHeaders({"Content-Type":"application/json",Authorization:`Bearer ${sessionStorage.getItem('token')}` })
    const requestOptions = {headers: httpHeader}
    return this.http.put(url,movie,requestOptions)
  }

  deleteMovie(email:String,movie:Movie) : Observable<any> {
    const url = "http://localhost:9000/api/v2/user/"+email+"?movieId="+movie.movieId
    const httpHeader = new HttpHeaders({"Content-Type":"application/json",Authorization:`Bearer ${sessionStorage.getItem('token')}` })
    const requestOptions = {headers: httpHeader}
    return this.http.delete(url,requestOptions)
  }

}
