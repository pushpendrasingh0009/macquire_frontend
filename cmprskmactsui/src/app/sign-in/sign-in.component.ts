import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { AuthResponse } from 'src/app/model/authresponse.model';
import { USER_TOKEN, LANDING_COMPONENT } from '../app.constants';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  isLoginError : boolean = false;
  constructor(public userService : UserService,public router : Router ) { }

  ngOnInit() {
    this.userService.logout();
  }

  OnSubmit(userName,password){
     /*this.userService.userAuthentication(userName,password).subscribe((data : AuthResponse)=>{
      localStorage.setItem(USER_TOKEN,data.token);
      this.userService.username = data.user.username;
      this.userService.role = data.user.authorities[0].authority;
      this.userService.tokenExpirationDate = new Date(data.tokenExpirationDate);
      this.router.navigate([LANDING_COMPONENT]);
    },
    (err : HttpErrorResponse)=>{
      this.isLoginError = true;
    });*/

  if(userName.toLowerCase() == 'admin'){
    localStorage.setItem(USER_TOKEN,'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1ZGllbmNlIjoid2ViIiwiY3JlYXRlZCI6MTU2MjY1NDYzMDM5MCwiZXhwIjoxNTYyOTU0NjMwfQ.UWv82IG5Hu6C0HptF4tg8lgrSenEQs7TYviuLtmsno5faB9eVopMg2Aqy-mLWo45zLyOwB1W6opIaUS7Ulpjeg');
    this.userService.username = 'Admin';
    this.userService.role = 'ROLE_ADMIN';
    let date = new Date();
    date.setDate(date.getDate()+1);
    this.userService.tokenExpirationDate = date;
    this.router.navigate([LANDING_COMPONENT]);
  }else if(userName.toLowerCase() == 'analyst'){
    localStorage.setItem(USER_TOKEN,'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1ZGllbmNlIjoid2ViIiwiY3JlYXRlZCI6MTU2MjY1NDYzMDM5MCwiZXhwIjoxNTYyOTU0NjMwfQ.UWv82IG5Hu6C0HptF4tg8lgrSenEQs7TYviuLtmsno5faB9eVopMg2Aqy-mLWo45zLyOwB1W6opIaUS7Ulpjeg');
    this.userService.username = 'Analyst';
    this.userService.role = 'ROLE_Analysr';
    let date = new Date();
    date.setDate(date.getDate()+1);
    this.userService.tokenExpirationDate = date;
    this.router.navigate([LANDING_COMPONENT]);
  }else{
    this.isLoginError = true;
  }

}
}
