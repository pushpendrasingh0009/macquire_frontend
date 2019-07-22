import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { USER_TOKEN, API_URL, GET_LOCATION_URL } from '../app.constants';
import { Location } from '../model/location.response.model';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {
  username :string;
  role:string;
  tokenExpirationDate:Date;

  constructor(private http: HttpClient,private router:Router) { }

  userAuthentication(username, password) {
    let data = {'username':  username,  'password': password};
    let reqHeader = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8', 'dataType':'json',  'No-Auth':'True'});
    return this.http.post(API_URL + 'create/token', data, { headers: reqHeader });
  }

  isUserLoggedIn(){
    let user = localStorage.getItem(USER_TOKEN);
    return !(user===null);
  }

  logout() {
    localStorage.removeItem(USER_TOKEN);
    this.router.navigate(['/login']);
  }

  getClientIpDetails(): Observable<Location> {
    let reqHeader = new HttpHeaders({'Accept': 'application/json', 'No-Auth': 'True'});
    return this.http.get<Location>(GET_LOCATION_URL,  { headers: reqHeader });
  }
}
