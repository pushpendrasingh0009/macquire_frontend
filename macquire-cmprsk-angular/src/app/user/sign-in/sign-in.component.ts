import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { USER_TOKEN,LANDING_COMPONENT } from '../../app.constants';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  isLoginError : boolean = false;
  constructor(private userService : UserService,private router : Router ) { }

  ngOnInit() {
  }

  OnSubmit(userName,password){
     this.userService.userAuthentication(userName,password).subscribe((data : any)=>{
      localStorage.setItem(USER_TOKEN,data.token);
      this.router.navigate([LANDING_COMPONENT]);
    },
    (err : HttpErrorResponse)=>{
      this.isLoginError = true;
    });
  }

}
