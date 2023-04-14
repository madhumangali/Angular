import { Component,EventEmitter,Input,OnChanges, Output, SimpleChanges, ViewChild } from '@angular/core';
import { CommonService } from '../common-service/commonservice.service';
import { AppComponent } from '../app.component';

// declare var person:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

constructor(private service:CommonService,private app:AppComponent){
 
}

books: any[] = [];



ngOnInit (){
  this.books = this.service.books;
  // new person();
}


@Input() 
searchText:string = '';

@Input() 
categoryText:string = '';

@Input() 
disable:boolean = false;

addToCart(id:number){
console.log(id);
this.service.books.forEach((book) => {
  if(book.id === id){
    book.cartStatus="ACTIVE";
  }
})

this.books=this.service.books;

this.app.count(this.service.books.filter(book => book.cartStatus==='ACTIVE').length);
}

detailsOfProduct(id:number){
  alert("")
}



}
