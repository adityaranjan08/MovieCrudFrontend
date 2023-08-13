import { Token } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: NgForm
  loginDetails: any
  loggedInValue: String
  
  constructor(private userService: UserService,private route: Router) {}


  ngOnInit(): void {
  }

  //login user
  loginUser(form: NgForm) {
    this.userService.login(form.value).subscribe(
      data => {
        this.userService.isUserLoggedIn=true
        this.loginDetails = data
        console.log(this.loginDetails.token)
        sessionStorage.setItem("token",this.loginDetails.token)
        if (this.loginDetails == null) {
          window.alert("credentials did not match, Try Again!")
        } else {
          window.alert("WELCOME"+" "+this.userService.email)
          this.route.navigate(["user-home"])
        }
      }

    )

  }

}
