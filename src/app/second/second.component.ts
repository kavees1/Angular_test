import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-second',
  template: `
    <p>
      second works!
      {{url_get}}
    </p>
  `,
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  constructor(private http: HttpClient) { }
  url_get;
  ngOnInit() {
    this.http.get('https://jsonplaceholder.typicode.com/todos/1').subscribe(data => 
      {
        this.url_get = JSON.stringify(data);
      });
  }

}
