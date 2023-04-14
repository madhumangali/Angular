import { Component } from '@angular/core';
import { CommonService } from '../common-service/commonservice.service';
import { ActivatedRoute } from '@angular/router';
import { SigninComponent } from '../signin/signin.component';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent {

  constructor(private service:CommonService,private activatedRouter:ActivatedRoute){

  }

  books: any[]=[];
  bookId:any;
  inc:number=0;
  quantity=1;
  price:number=0;
  discount:number=0;
  deliveryCharges:number=50;
  total:number=0;

  ngOnInit(){
   this.books=this.service.books;

   this.activatedRouter.paramMap.subscribe( (param) => {
        this.bookId=param.get('id');
        this.books=this.service.books.filter(book => book.id == this.bookId );
   })

   this.bill();
   
  }

  bill(){

    this.books.forEach( book => {
      this.price= book.price * this.quantity;
     } )
     this.discount=20;
     this.total = (this.price + this.discount + this.deliveryCharges);
  
  }

  decrement(){

   if(this.quantity>1){
    this.quantity=this.quantity - 1;
   }

   this.bill();
   
  }

  increment(){
    this.quantity=this.quantity + 1;
    this.bill();
  }

}
