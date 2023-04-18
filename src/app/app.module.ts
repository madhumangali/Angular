import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import {MatIconModule} from '@angular/material/icon'
import {HttpClientModule} from '@angular/common/http';
import {MatFormFieldModule} from '@angular/material/form-field';
import { SigninComponent } from './signin/signin.component';  
import { HomeComponent } from './home/home.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { SearchComponent } from './search/search.component';
import { CommonService } from './common-service/commonservice.service';
import { CartComponent } from './cart/cart.component';
import { CategoryComponent } from './category/category.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { BlogComponent } from './blog/blog.component';
import { BuyComponent } from './buy/buy.component';
import {MatBadge, MatBadgeModule} from '@angular/material/badge';
import {MatButtonModule} from '@angular/material/button';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { IntropageComponent } from './intropage/intropage.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    HomeComponent,
    AboutComponent,
    SearchComponent,
    CartComponent,
    CategoryComponent,
    BlogComponent,
    BuyComponent,
    ProductdetailsComponent,
    IntropageComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    HttpClientModule,
    MatFormFieldModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgSelectModule,
    MatBadgeModule,
    MatButtonModule
  ],
  providers: [ CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
