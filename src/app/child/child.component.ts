import { Component, OnInit ,Input } from '@angular/core';
import {ParentComponent} from '../parent/parent.component';

@Component({
  selector: 'app-child',
  template: `
    <p>
      child works!
    </p>
    <h3>  <p>I received {{fromParent}} from my parent.</p></h3>
    <h4>{{parentfrom}}</h4>    
    
    `
  ,
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() fromParent : string;
  data;
constructor() {

}

  parentfrom;
  ngOnChanges() {
    if(!!this.fromParent){         
         console.log("On te onchange" + this.fromParent);         
    }
  }
  ngOnInit() {
    this.parentfrom = ParentComponent.test_vairabe_in_parent;
    console.log("the from parent value is " + this.parentfrom);
  }

}
