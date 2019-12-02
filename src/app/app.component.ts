import { Component } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->

     <button (click)="onclick()">Back </button>
     <br>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router){}
  onclick(){
    //alert("clicked");
    this.router.navigateByUrl("/dash");
  }
  title = 'angular';

}
