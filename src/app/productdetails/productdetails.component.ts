import { Component } from '@angular/core';
import { CommonService } from '../common-service/commonservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent {


  constructor(private service:CommonService,private activatedRouter:ActivatedRoute){

  }

  books: any[]=[];
  bookId:any;
  

  ngOnInit(){
   this.books=this.service.books;

   this.activatedRouter.paramMap.subscribe( (param) => {
        this.bookId=param.get('id');
        this.books=this.service.books.filter(book => book.id == this.bookId );
   })

  }

  

}
