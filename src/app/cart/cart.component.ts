import { Component, Input } from '@angular/core';
import { CommonService } from '../common-service/commonservice.service';
import { HomeComponent } from '../home/home.component';
import { ActivatedRoute, Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { SigninComponent } from '../signin/signin.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers: [
    SigninComponent
  ]
})
export class CartComponent {

  constructor(private service:CommonService,private activatedRouter:ActivatedRoute,
    private app:AppComponent, 
    private signIn:SigninComponent,
    private router:Router){

  }

  books: any[] =[];
  inc:number=0;

  ngOnInit(){
   this.books=this.service.books;
   this.inc= this.service.books.filter(book => book.cartStatus === 'ACTIVE').length;
   console.log(this.inc);
   
  }

  deleteFromCart(id:number){

    this.service.books.forEach( (book) => {
       if(book.id === id) {
        book.cartStatus = "INACTIVE";
       }
    })

   this.books= this.service.books;

   this.app.cartItemsCount= this.app.cartItemsCount-1;

   this.inc = this.inc - 1;

   if(this.app.cartItemsCount <= 0)
    this.app.cartBadge = true;
  }

  buy(id:number){
    
    if(!this.service.isSignedin)
       this.router.navigate(['/Intro'])
    else
      this.router.navigate(['/Cart/Buy',id]);
     
  }

}
