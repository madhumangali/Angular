import { Component } from '@angular/core';
import { CommonService } from '../common-service/commonservice.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {

  constructor(private service:CommonService){

  }

  featuredBooks:any[] = [];

  shwMorebtn=false;
  shwLessbtn=true;
  limit=3;

  ngOnInit(){
    this.featuredBooks=this.service.featuredBooks;
  }

  shwMoreBtnClick(){
    this.shwMorebtn=true;
    this.shwLessbtn=false;
    this.limit=this.featuredBooks.length;
  }

  shwLessBtnClick(){
    this.shwMorebtn=false;
    this.shwLessbtn=true;
    this.limit=3;
  }



}
