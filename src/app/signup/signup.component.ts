import { Component,OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { User } from '../model/user';
import { CommonService } from '../common-service/commonservice.service';
import { Router } from '@angular/router';
// import {Mat} from '@angular/material';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

 reactiveForm!: FormGroup;

 formStatus: any ;

 firstname ='';

 isRegistered= false;

 constructor(private service:CommonService,private router:Router){

 }

 ngOnInit(){
  this.reactiveForm= new FormGroup({
    firstName:new FormControl(null,[Validators.required,this.noSpaceAllowed]),
    lastName: new FormControl(null),
    email: new FormControl(null,[Validators.email,Validators.required],this.emailNotAllowed),
    password: new FormControl(null),
    retypePassword: new FormControl(null,[Validators.required,this.checkPassword]),
    gender: new FormControl('male'),
    country: new FormControl('india'),
    terms: new FormControl(null),
    newsLetter: new FormControl(null)
  })
 }


  onSubmit(){
    // console.log(this.reactiveForm);

    // Object.keys(this.reactiveForm.controls).forEach( key => {
    //   // if (this.user.country.){

    //   // }
    //   console.log(key);

      
    // })

    this.service.user(this.reactiveForm);

    // this.router.navigate(['/Signin']);

    this.isRegistered=true;

    // console.log(this.reactiveForm.value);

  }

  noSpaceAllowed(control: FormControl){
   
    if(control.value !=null && control.value.indexOf(' ') != -1){
      return {noSpaceAllowed:true};
    }
    return null;
}

emailNotAllowed(control: FormControl){
  const response = new Promise((resolve,reject) =>{
       setTimeout(() => {
         if(control.value === 'madhumohan95536@gmail.com'){
          resolve({emailNotAllowed: true})
         }
         else{
          resolve(null);
         }
       },5000)
  })
  return response;
}

checkPassword(control:AbstractControl){
  
  // if(control.get('retypePassword').value !== control.get('password').value){
  //   return {checkPassword:true};
  // }

  return null;
}
  
}
