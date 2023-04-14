import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SearchComponent } from './search/search.component';
import { CartComponent } from './cart/cart.component';
import { CategoryComponent } from './category/category.component';
import { BlogComponent } from './blog/blog.component';
import { BuyComponent } from './buy/buy.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { IntropageComponent } from './intropage/intropage.component';


const routes: Routes = [
  // {path:'',redirectTo:'/Home',pathMatch:'full'},
  {path:'About', component:AboutComponent},
  {path:'Home', component:HomeComponent},
  {path:'Search', component:SearchComponent},
  {path:'Cart', component:CartComponent},
  {path:'Category', component:CategoryComponent},
  {path:'Blog', component:BlogComponent},
  {path: 'Cart',children:[
    {path:'Buy/:id',component: BuyComponent }
  ]},
  {path: 'Home',children:[
    {path:'Details/:id',component: ProductdetailsComponent }
  ]},
  {path:'Intro',component:IntropageComponent},
  {path:'Signin', component:SigninComponent},
  {path:'Signup', component:SignupComponent}
  // {path:'Contact', canDeactivate:[CanDeactivateGuardService], component:ContactComponent},
  // {path:'Courses', component:CoursesComponent, resolve:{courses: CourseResolveService} }, 
  // // canActivate:[CourseGuard]
  // // {path:'Courses/course/:id',component:CourseComponent},
  // {path: 'Courses', canActivateChild:[CourseGuard] ,children:[
  //   {path:'course/:id',component: CourseComponent}
  // ]},
  // {path:'**',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
