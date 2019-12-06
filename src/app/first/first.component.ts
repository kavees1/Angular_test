import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
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
 map = new Map();

  ngOnInit() {
    this.map.set("A",1);
    this.map.set("B",2);
    this.map.set("C",3);
    console.log("1:"+this.map.get("A"));
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
