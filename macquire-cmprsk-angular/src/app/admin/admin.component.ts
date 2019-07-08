import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  userClaims: any;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUserInfos().subscribe((data: any) => {
      this.userClaims = data;
    });
  }

}
