import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Movie } from '../movie';
// import { Movie } from '../movie';
import { MovieCrudService } from '../movie-crud.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss']
})
export class UserHomeComponent implements OnInit {

  movies:Movie[] | undefined


  constructor(private movieService:MovieCrudService,private userService:UserService,
  private route:Router) { }

  ngOnInit(): void {
    this.getMovies()
  }

  getMovies() {
    this.movieService.getMovies(this.userService.email).subscribe(data => {
      console.log(data)
      this.movies = data;
    });
  }

  addMovie(form:NgForm){
    var movie = {
      "movieId":form.value.movieId,
      "movieName":form.value.movieName,
      "movieDetails":{
          "genre":form.value.movieGenre,
          "rating":form.value.movieRating,
          "director":form.value.movieDirector,
          "description":form.value.movieDesc
      }
  }
    console.log(form.value)
    window.alert("Movie Aded To Library")
    this.movieService.post(movie,this.userService.email).subscribe(
      data=> {console.log(data),this.ngOnInit()}
      
    )
   
   
  }

  updateMovie(movie:Movie) {
    this.userService.movie = movie
    this.route.navigate(["edit-movie"])
  }

  deleteMovie(movie:Movie) {
    this.movieService.deleteMovie(this.userService.email,movie).subscribe(
      data => {console.log(data),this.ngOnInit()}
    )
    
  }

  
}
