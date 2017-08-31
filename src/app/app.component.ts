import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular4';
  
  constructor(private dataService:DataService) {

  }
  
  someProperty:string = '';
  myArr:any = '';
  ngOnInit() {
    this.myArr = this.dataService.cars;
	
    this.someProperty = this.dataService.myData();
	
	
  }
}
