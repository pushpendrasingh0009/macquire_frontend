import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import { User } from './user.model';

@Injectable()
export class UserService {
  readonly rootUrl = 'http://localhost:8081/api/';
  username :String;
  role:String;
  
  constructor(private http: HttpClient,private router:Router) { }

  registerUser(user: User) {
    const body: User = {
      username: user.username,
      password: user.password,
      email: user.email,
      firstname: user.firstname,
      lastname: user.lastname
    }
    
    let reqHeader = new HttpHeaders({'No-Auth':'True'});
    return this.http.post(this.rootUrl + 'user/register', body,{headers : reqHeader});
  }

  userAuthentication(username, password) {
    let data = {'username':  username,  'password': password};
    //console.log(data);
    let reqHeader = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8', 'dataType':'json',  'No-Auth':'True'});
    return this.http.post(this.rootUrl + 'create/token', data, { headers: reqHeader });
  }

  getUserInfos(){
    //console.log(localStorage.getItem("userToken"));
    let reqHeader = new HttpHeaders({'Authorization': localStorage.getItem("userToken")});
    return  this.http.get(this.rootUrl+'user', {headers: reqHeader });
  }

  isUserLoggedIn(){
    let user = localStorage.getItem('userToken');
    return !(user===null);
  }

  logout() {
    localStorage.removeItem('userToken');
    this.router.navigate(['/login']);
    this.role='';
  }
}
