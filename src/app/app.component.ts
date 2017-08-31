import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';

import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular4';
  
   // Define a users property to hold our user data
  users: Array<any>;
  
   // Create an instance of the DataService through dependency injection
  constructor(private dataService:DataService) {
	  
	 // Access the Data Service's getUsers() method we defined
    this.dataService.getUsers().subscribe(res => this.users = res);

  }
  
  someProperty:string = '';
  myArr:any = '';
  
  ngOnInit() {
    this.myArr = this.dataService.cars;
	
    this.someProperty = this.dataService.myData();
	
	
  }
}
