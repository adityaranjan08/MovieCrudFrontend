import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  
  //Injected services and router
  constructor(private userService: UserService,private route: Router) { }

  ngOnInit(): void {
  }

  //register a new user 
  registerUser(form:NgForm){
    console.log(form.value);
    this.userService.post(form.value).subscribe(
      data=> console.log(data)
    )
    window.alert("User Registered")
    this.route.navigate(["login"])
  }

}
