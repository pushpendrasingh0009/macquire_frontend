import { Component, OnInit } from '@angular/core';
import * as Fuse from 'fuse.js';
import { SimplePartyFuse } from './pre-conflict-chk.model';

@Component({
  selector: 'app-pre-conflict-chk',
  templateUrl: './pre-conflict-chk.component.html',
  styleUrls: ['./pre-conflict-chk.component.css']
})
export class PreConflictChkComponent implements OnInit {
  public searchData: SimplePartyFuse [] ;
  public output: SimplePartyFuse[];
  constructor() { }

  ngOnInit() {
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
    }
  ];
  }

  OnSearch(searchValue: string) {
    console.log('in change' + searchValue);
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
    this.output = fuse.search(searchValue);
    console.log(this.output);
  }
}
