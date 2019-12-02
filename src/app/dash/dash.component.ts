import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dash',
  template: `
   
      
      <a routerLink="/dash">To Dash</a><br/>
      <a routerLink="/first">To First</a><br/>
      <a routerLink="/second">To Second</a><br/>
  
  `,
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
