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
  vairabe_in_parent;
  constructor() { }

  ngOnInit() {
    this.vairabe_in_parent = "POPULATING VARUABLE IN PARENT TS CLASS";
  }

}
