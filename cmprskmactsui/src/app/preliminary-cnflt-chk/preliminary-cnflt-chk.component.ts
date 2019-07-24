import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-preliminary-cnflt-chk',
  templateUrl: './preliminary-cnflt-chk.component.html',
  styleUrls: ['./preliminary-cnflt-chk.component.css']
})
export class PreliminaryCnfltChkComponent implements OnInit {

  public PartiesName = "";
  public DealAmount = "$ ";
  constructor() { }

  ngOnInit() {
  }

  OnSearch(PartiesName, DealAmount){
    console.log(PartiesName);
    console.log(DealAmount);
  }

}
