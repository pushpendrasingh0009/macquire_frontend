import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { UserService } from '../service/user.service';
import { Location } from '../model/location.response.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  now: Date;
  city: string;
  country: string;

  constructor(public userService: UserService) {
    setInterval(() => {
      this.now = new Date();
    }, 1);

    userService.getClientIpDetails().subscribe((data: Location) => {
      this.city = data.city;
      this.country = data.country;
    },
    (err: HttpErrorResponse) => {
      this.city = 'Sydney';
      this.country = 'Australia';
    });

  }

  ngOnInit() {
  }



}
