// Imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DataService } from './data.service';
import { HttpModule } from '@angular/http';


// Declarations
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';

const appRoutes: Routes = [
   { path: 'Product', component: ProductComponent }
   
];


@NgModule({
  declarations: [AppComponent,ProductComponent],
  imports: [ BrowserModule, HttpModule],
  providers: [DataService],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
