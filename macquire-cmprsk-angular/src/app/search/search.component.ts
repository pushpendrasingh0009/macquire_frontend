import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private userService:UserService) { }

  ngOnInit() {
    this.userService.getUserInfos().subscribe((data:any)=>{
      this.userService.username = data.username;
      this.userService.role=data.authorities[0].authority;
    });
  }

}
