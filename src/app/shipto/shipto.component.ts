import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shipto',
  templateUrl: './shipto.component.html',
  styleUrls: ['./shipto.component.css']
})
export class ShiptoComponent implements OnInit {
  name: string;
  addr1: string;
  addr2: string;
  city: string;
  state: string;
  zip: string;
  delivery: string;
  constructor() { }

  ngOnInit() {
  }
  onSubmit(){
    alert("onsubtmit is clicked");
  }
}
