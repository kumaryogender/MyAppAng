import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
	
result:any;

  constructor(private _http: Http) { }
	cars = [
    'Ford','Chevrolet','Buick'
  ];


  myData() {
    return 'This is my service data, man!';
  }
  
  getUsers() {
    return this._http.get("/api/user")
      .map(result => this.result = result.json().data);
  }
}
