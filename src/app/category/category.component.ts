import { Component } from '@angular/core';
import { CommonService } from '../common-service/commonservice.service';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})

export class CategoryComponent {

  constructor(private service:CommonService){

  }

  categories:any[] = [];
    
  selected = '';

  ngOnInit(){
    this.service.books.filter( book => this.categories.push(book.catergory) );
    this.categories = [...new Set(this.categories)];
  }

  category(){
    console.log(this.selected);
  }



}
