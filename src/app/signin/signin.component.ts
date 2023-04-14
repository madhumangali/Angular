import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CommonService } from '../common-service/commonservice.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  
  constructor(private router:Router,private service: CommonService){

  }

  reactiveForm!: FormGroup;

  formStatus: any ;

  ngOnInit(){
    this.reactiveForm= new FormGroup({
      email: new FormControl(null,[Validators.email,Validators.required]),
      password: new FormControl(null),
    })
   }
 

  onSubmit(){
    
    this.service.users.forEach(user => {

      if(user.$email === this.reactiveForm.get('email')?.value){ 
        if(user.$password === this.reactiveForm.get('password')?.value){
          this.router.navigate(['/Cart']);
          this.service.isSignedin=true;
        }
      }

    })
   
  }

}
