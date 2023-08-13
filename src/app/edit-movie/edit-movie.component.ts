import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Movie } from '../movie';
import { MovieCrudService } from '../movie-crud.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.scss']
})
export class EditMovieComponent implements OnInit {

  movie:Movie
  //Injects services and router 
  constructor(private userService:UserService, private movieService:MovieCrudService,private route:Router) { }

  //OnInitialization of Component
  ngOnInit(): void {
    this.movie = this.userService.movie
  }

  //updates a particular movie details and returns the updated movie
  updateMovie(form:NgForm){
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
    console.log(movie)
    this.movieService.updateMovie(this.userService.email,movie).subscribe(
      data=> console.log(data)
    )
    this.route.navigate(["user-home"])
  }
}
