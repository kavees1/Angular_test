import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  list;
  empList: Array<any> = [];
data;
  constructor(private http: HttpClient,private router: Router,private ActivatedRoute : ActivatedRoute ) { }

  ngOnInit() {
  //  alert(GLOBALS.globalVar);

    let url = "http://red.cse.yorku.ca:32849/Catalog?cors";
  

this.http.get(url).subscribe(data => {
  let resp = JSON.parse(JSON.stringify(data));
  console.log("THE LENGTH IS " +resp.length);
  for (let i = 0; i < resp.length; i++) {
    let e = resp[i];
    this.empList.push(resp[i]);
  }
});
 
}






 

}