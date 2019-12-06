import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
    <p>
      parent works!
    </p>
    <h3>THe parent variable is {{vairabe_in_parent}}</h3>
    <div style="float: right;">
    <app-child [fromParent]="'hgjghjgj'"></app-child>
      </div>
     
  `,
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
 static test_vairabe_in_parent:string;
 vairabe_in_parent:string;
  constructor() { 


  }

  ngOnInit() {
    this.vairabe_in_parent = "POPULATING VARUABLE IN PARENT TS CLASS";
    ParentComponent.test_vairabe_in_parent = this.vairabe_in_parent;
    console.log("FROM PARENT CLASS" + ParentComponent.test_vairabe_in_parent );
  }

}
