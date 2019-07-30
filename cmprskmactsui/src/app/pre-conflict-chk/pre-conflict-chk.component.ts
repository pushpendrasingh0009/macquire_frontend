import { Component, OnInit } from '@angular/core';
import * as Fuse from 'fuse.js';
import { SimplePartyFuse } from './pre-conflict-chk.model';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-pre-conflict-chk',
  templateUrl: './pre-conflict-chk.component.html',
  styleUrls: ['./pre-conflict-chk.component.css']
})
export class PreConflictChkComponent implements OnInit {
  searchData: SimplePartyFuse [] ;
  output: SimplePartyFuse[];
  parties: string;
  selectedParties: Set<string> ;

  constructor(public userService: UserService) { }

  ngOnInit() {
    this.selectedParties = new Set<string>();
    this.searchData = this.userService.getPartyData();
  }

  OnSearch(searchValue: string) {
    const options: Fuse.FuseOptions<SimplePartyFuse> = {
      shouldSort: true,
      threshold: 0.4,
      location: 0,
      distance: 100,
      maxPatternLength: 32,
      minMatchCharLength: 2,
      keys: ['name', 'data'],
    };
    const fuse = new Fuse(this.searchData, options);
    this.output = fuse.search(this.parties);
  }

  OnChecked(partyName: string, event) {
      if (event.target.checked) {
        this.selectedParties.add(partyName);
      } else {
        this.selectedParties.delete(partyName);
      }
  }

  OnCancel(partyName: string) {
    this.selectedParties.delete(partyName);
  }

  onRadioSelect(event) {
    console.log(event.target.checked);
    if (event.target.checked) {
      this.output.forEach(element => {
          this.selectedParties.add(element.name);
      });
    } else {
      this.output.forEach(element => {
        this.selectedParties.delete(element.name);
    });
    }
  }
}
