import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from './user.model';
import { USER_TOKEN,API_URL } from '../app.constants';

@Injectable()
export class UserService {
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
    return this.http.post(API_URL + 'user/register', body,{headers : reqHeader});
  }

  userAuthentication(username, password) {
    let data = {'username':  username,  'password': password};
    let reqHeader = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8', 'dataType':'json',  'No-Auth':'True'});
    return this.http.post(API_URL + 'create/token', data, { headers: reqHeader });
  }

  getUserInfos(){
    let reqHeader = new HttpHeaders({'Authorization': localStorage.getItem(USER_TOKEN)});
    return  this.http.get(API_URL+'user', {headers: reqHeader });
  }

  isUserLoggedIn(){
    let user = localStorage.getItem(USER_TOKEN);
    return !(user===null);
  }

  logout() {
    localStorage.removeItem(USER_TOKEN);
    this.router.navigate(['/login']);
    this.role='';
  }
}
