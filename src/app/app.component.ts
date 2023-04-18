import { Component, EventEmitter, OnInit, Output,AfterViewInit,ViewChild } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from './common-service/commonservice.service';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
 
  constructor(private matIconRegistry:MatIconRegistry,
    private domSanitizer:DomSanitizer,private service: CommonService){
     this.matIconRegistry.addSvgIcon(
      'lobster',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/svg/person-fill.svg')
     ),
     this.matIconRegistry.addSvgIcon(
      'lock',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/svg/file-earmark-lock2.svg')
     ),
     this.matIconRegistry.addSvgIcon(
      'mail',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/svg/envelope-fill.svg')
     ),
     this.matIconRegistry.addSvgIcon(
      'search',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/svg/search.svg')
     ),
     this.matIconRegistry.addSvgIcon(
      'cart',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/svg/cart-fill.svg')
     )
  }

  cartBadgeStatus=true;

  public cartItemsCount:number = 0;

  count(num:number){

    this.cartItemsCount=num;
    
    console.log(this.cartItemsCount);
    if(this.cartItemsCount > 0){
      this.cartBadgeStatus=false;
    }
    
  }
 

}




