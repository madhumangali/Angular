import { Component, EventEmitter, Output } from '@angular/core';
import { CommonService } from '../common-service/commonservice.service';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent{

  constructor(private service:CommonService){

  }

  searchValue = '';

  
}
