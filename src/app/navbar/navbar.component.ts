import { Component } from '@angular/core';
import { CommonService } from '../common-service/commonservice.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

 cartBadgeStatus=true;

 public cartItemsCount:number = 0;

 constructor(private service:CommonService){

 }

  count(num:number){
    this.cartItemsCount=num;
    
    console.log(this.cartItemsCount);
    if(this.cartItemsCount > 0){
      this.service.cartBadgeStatus=false;
      this.cartBadgeStatus=this.service.cartBadgeStatus;
      console.log(this.service.cartBadgeStatus);
    }
  }

}
