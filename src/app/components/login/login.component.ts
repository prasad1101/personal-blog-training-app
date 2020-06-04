import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  placeholder = "enter a password";

  userData = {
    userName: "ankita",
    password: ""
  }


  login() {

    console.log(this.userData)
    if (this.userData.userName && this.userData.password) {
      alert("login successful!")
      this.router.navigateByUrl("home");
    } else {
      alert("username or password incorrect")
    }

  }

}
