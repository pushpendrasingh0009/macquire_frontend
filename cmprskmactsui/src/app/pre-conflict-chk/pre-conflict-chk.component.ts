import { Component, OnInit } from '@angular/core';
import * as Fuse from 'fuse.js';
import { SimplePartyFuse } from './pre-conflict-chk.model';
import { count } from 'rxjs/operators';

@Component({
  selector: 'app-pre-conflict-chk',
  templateUrl: './pre-conflict-chk.component.html',
  styleUrls: ['./pre-conflict-chk.component.css']
})
export class PreConflictChkComponent implements OnInit {
  searchData: SimplePartyFuse [] ;
  output: SimplePartyFuse[];
  parties: string;
  selPartyStr: string;
  selectedParties: Set<string> ;

  constructor() { }

  ngOnInit() {
    this.selectedParties = new Set<string>();
    this.searchData = [{
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
    }
  ];
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
      let counter = 0;
      if (event.target.checked) {
        this.selectedParties.add(partyName);
      } else {
        this.selectedParties.delete(partyName);
      }
      this.selPartyStr = '';
      for (const elem of this.selectedParties) {
        if (counter !== 0) {
          this.selPartyStr += ', ';
        }
        this.selPartyStr += elem;
        counter++;
      }
  }
}
