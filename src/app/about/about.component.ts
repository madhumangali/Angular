import { Component } from '@angular/core';
import { CommonService } from '../common-service/commonservice.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  constructor(private service:CommonService){

  }

  founders= this.service.founders;
 
}
