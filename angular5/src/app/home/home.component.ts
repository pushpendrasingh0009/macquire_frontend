import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userClaims: any;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUserInfos().subscribe((data: any) => {
      this.userClaims = data;
    });
  }
}
