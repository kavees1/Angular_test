import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-first',
  template: `

  <input id="name" name="name" class="form-control"
      required minlength="4" appForbiddenName="bob"
      [(ngModel)]="names" #name="ngModel" >

<div *ngIf="name.invalid && (name.dirty || name.touched)"
    class="alert alert-danger">

  <div *ngIf="name.errors.required">
    Name is required.
  </div>
  <div *ngIf="name.errors.minlength">
    Name must be at least 4 characters long.
  </div>
  <div *ngIf="name.errors.forbiddenName">
    Name cannot be Bob.
  </div>

</div>
  <form (ngSubmit)="onSubmit()" #myForm="ngForm">
  <input type="text" name="x" [(ngModel)]="x" />
  <br/>
  <input type="text" name="y" [(ngModel)]="y" />
  <br/>
  <button type="submit">ADD</button>
  <br>

</form>
   <p [hidden]="show"> The sum if {{sum}} </p>
   <p [hidden]="show1"> The sum1 if {{sum1}} </p>
  `,
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  constructor(private url: ActivatedRoute) { 
    this.url.queryParams.subscribe(params =>
      {
        this.x1 = params['x1'];
        this.y1 = params['y1'];
      });
  }
  names;
sum;
sum1;
x;
y;
x1;
y1;
show :boolean = true;
show1 :boolean = true;
  ngOnInit() {
    
  }
  onSubmit(): void
  {
   
     //this.sum = parseInt(this.x) + parseInt(this.y);
     this.sum1 = +this.x1 + (+this.y1);
     if(this.sum1 > 0){
     this.show1 = false;
     }
     this.sum = +this.x + (+this.y);
     if(this.sum > 0){
   
     this.show = false;
     }

  }
}
