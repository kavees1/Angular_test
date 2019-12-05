import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dash',
  template: `
   
      
      <a routerLink="/dash">To Dash</a><br/>
      <a routerLink="/first">To First</a><br/>
      <a routerLink="/second">To Second</a><br/>
      <a routerLink="/child">To Child</a><br/>
      <a routerLink="/parent">To Parent</a><br/>
      <a routerLink="/catalog">To Catalog</a><br/>
  
  `,
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
