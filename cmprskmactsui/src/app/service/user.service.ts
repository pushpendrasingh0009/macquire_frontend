import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { USER_TOKEN, API_URL, GET_LOCATION_URL } from '../app.constants';
import { Location } from '../model/location.response.model';
import { Observable } from 'rxjs';
import { SimplePartyFuse } from '../pre-conflict-chk/pre-conflict-chk.model';

@Injectable()
export class UserService {
  username: string;
  role: string;
  tokenExpirationDate: Date;
  partyData: SimplePartyFuse[];

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

  getPartyData() {
    this.partyData = [{
      name: 'RIO TINTO',
      data: {
        Isin: '562jsi2',
        SEDOL: 'teyyww',
        CUSIP : 'N/A',
        Ticker: 'YES',
        type: 'N/A'
      }
    },
    {
      name: 'TINPLATE INC',
      data: {
        Isin: '561234',
        SEDOL: 'YTER',
        CUSIP : 'TER',
        Ticker: 'NO',
        type: 'N/A'
      }
    },
    {
      name: 'TINSOFT LTD',
      data: {
        Isin: '561245',
        SEDOL: 'YTE1',
        CUSIP : 'T45',
        Ticker: 'YES',
        type: 'MANUAL COMPANY'
      }
    },
    {
      name: 'FOFTNI LTD',
      data: {
        Isin: '36445',
        SEDOL: 'EY1',
        CUSIP : 'S43',
        Ticker: 'NO',
        type: 'N/A'
      }
    },
    {
      name: 'ITERW PVT',
      data: {
        Isin: '38912',
        SEDOL: 'N/A',
        CUSIP : '651',
        Ticker: 'N/A',
        type: 'AUTOMATED'
      }
    },
    {
      name: 'SORCERT INT',
      data: {
        Isin: '98315',
        SEDOL: 'YUE',
        CUSIP : 'S193',
        Ticker: 'YES',
        type: 'MANUAL'
      }
    },
    {
      name: 'UTWQ LTD',
      data: {
        Isin: '65123',
        SEDOL: 'GT1',
        CUSIP : '8832',
        Ticker: 'YES',
        type: 'AUTOMATED'
      }
    }
  ];
    return this.partyData;
  }
}
