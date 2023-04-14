import { EventEmitter, Injectable } from '@angular/core';
import { User } from '../model/user';
import { HomeComponent } from '../home/home.component';
import { Subject } from 'rxjs';
import { LowerCasePipe } from '@angular/common';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CommonService{

    books =[
        {id:1,pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtJyRVwHgguS6Oyh0PKAa0K5_Hd8jDL4gjBlqGt2wPDw&usqp=CAU&ec=48665701",title:"Pirates",price:200,desc:"This about sea thieves", rating:2,catergory:"Horror", cartStatus:"INACTIVE",author:"Madhu" },
        {id:2,pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtJyRVwHgguS6Oyh0PKAa0K5_Hd8jDL4gjBlqGt2wPDw&usqp=CAU&ec=48665701",title:"IronMan",price:200,desc:"This about sea thieves", rating:2,catergory:"Avengers" , cartStatus:"INACTIVE",author:"Madhu"},
        {id:3,pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtJyRVwHgguS6Oyh0PKAa0K5_Hd8jDL4gjBlqGt2wPDw&usqp=CAU&ec=48665701",title:"Pirates",price:200,desc:"This about sea thieves", rating:2,catergory:"Horror" , cartStatus:"INACTIVE",author:"Madhu"},
        {id:4,pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtJyRVwHgguS6Oyh0PKAa0K5_Hd8jDL4gjBlqGt2wPDw&usqp=CAU&ec=48665701",title:"Pirates",price:200,desc:"This about sea thieves", rating:2,catergory:"Horror" , cartStatus:"INACTIVE",author:"Madhu"},
        {id:5,pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtJyRVwHgguS6Oyh0PKAa0K5_Hd8jDL4gjBlqGt2wPDw&usqp=CAU&ec=48665701",title:"Pirates",price:200,desc:"This about sea thieves", rating:2,catergory:"Horror" , cartStatus:"INACTIVE",author:"Madhu"},
        {id:6,pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtJyRVwHgguS6Oyh0PKAa0K5_Hd8jDL4gjBlqGt2wPDw&usqp=CAU&ec=48665701",title:"Pirates",price:200,desc:"This about sea thieves", rating:2,catergory:"Horror" , cartStatus:"INACTIVE",author:"Madhu"},
        {id:7,pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtJyRVwHgguS6Oyh0PKAa0K5_Hd8jDL4gjBlqGt2wPDw&usqp=CAU&ec=48665701",title:"Pirates",price:200,desc:"This about sea thieves", rating:2,catergory:"Horror" , cartStatus:"INACTIVE",author:"Madhu"},
        {id:8,pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtJyRVwHgguS6Oyh0PKAa0K5_Hd8jDL4gjBlqGt2wPDw&usqp=CAU&ec=48665701",title:"Pirates",price:200,desc:"This about sea thieves", rating:2,catergory:"Horror" , cartStatus:"INACTIVE",author:"Madhu"},
        {id:9,pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtJyRVwHgguS6Oyh0PKAa0K5_Hd8jDL4gjBlqGt2wPDw&usqp=CAU&ec=48665701",title:"Pirates",price:200,desc:"This about sea thieves", rating:2,catergory:"Horror" , cartStatus:"INACTIVE",author:"Madhu"},
        {id:10,pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtJyRVwHgguS6Oyh0PKAa0K5_Hd8jDL4gjBlqGt2wPDw&usqp=CAU&ec=48665701",title:"Pirates",price:200,desc:"This about sea thieves", rating:2,catergory:"Horror" , cartStatus:"INACTIVE",author:"Madhu"},
        {id:11,pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtJyRVwHgguS6Oyh0PKAa0K5_Hd8jDL4gjBlqGt2wPDw&usqp=CAU&ec=48665701",title:"Pirates",price:200,desc:"This about sea thieves", rating:2,catergory:"Horror" , cartStatus:"INACTIVE",author:"Madhu"},
        {id:12,pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtJyRVwHgguS6Oyh0PKAa0K5_Hd8jDL4gjBlqGt2wPDw&usqp=CAU&ec=48665701",title:"Pirates",price:200,desc:"This about sea thieves", rating:2,catergory:"Horror" , cartStatus:"INACTIVE",author:"Madhu"}
      ]

      featuredBooks = [
        {pic:"https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61M1eEsuSML.jpg",title:"Rich Dad Poor Dad", price:500, desc:"Financal Education And Investments", rating: 4.5, catergory:"Finance"},
        {pic:"https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61M1eEsuSML.jpg",title:"Rich Dad Poor Dad", price:500, desc:"Financal Education And Investments", rating: 4.5, catergory:"Finance"},
        {pic:"https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61M1eEsuSML.jpg",title:"Rich Dad Poor Dad", price:500, desc:"Financal Education And Investments", rating: 4.5, catergory:"Finance"},
        {pic:"https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61M1eEsuSML.jpg",title:"Rich Dad Poor Dad", price:500, desc:"Financal Education And Investments", rating: 4.5, catergory:"Finance"},
        {pic:"https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61M1eEsuSML.jpg",title:"Rich Dad Poor Dad", price:500, desc:"Financal Education And Investments", rating: 4.5, catergory:"Finance"},
        {pic:"https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61M1eEsuSML.jpg",title:"Rich Dad Poor Dad", price:500, desc:"Financal Education And Investments", rating: 4.5, catergory:"Finance"},

      ]
    
      founders =[
        {name:"Maddy",pic:"https://wallpaperaccess.com/full/2213424.jpg",position:"CEO"},
        {name:"Maddy",pic:"https://wallpaperaccess.com/full/2213424.jpg",position:"Chairman"},
        {name:"Maddy",pic:"https://wallpaperaccess.com/full/2213424.jpg",position:"President"},
        {name:"Maddy",pic:"https://wallpaperaccess.com/full/2213424.jpg",position:"Co-founder"},
        
     ]

     users: User[] =[];

     isSignedin= false;

     user(details:FormGroup){

       let user= new User();

      
      // var object =details.;
      console.log( );
       

       user.$country=details.get('country')?.value
       user.$email=details.get('email')?.value
       user.$firstName=details.get('firstName')?.value
       user.$lastName=details.get('lastName')?.value
       user.$gender=details.get('gender')?.value
       user.$password=details.get('password')?.value
       user.$terms=details.get('terms')?.value
       user.$newsLetter=details.get('newsLetter')?.value

       this.users.push(user);

       console.log(this.users);
       
     }
     

}