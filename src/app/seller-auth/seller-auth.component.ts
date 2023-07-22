import { Component } from '@angular/core';
import { SellerAuthService } from '../services/seller-auth.service';
import { Router } from '@angular/router'
import { signUp } from '../data-type';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent {
  constructor(private seller : SellerAuthService, private route : Router){}
  showLogin = false; 
  authError: string = '';
  ngOnInit():void{
    this.seller.reloadSeller()
  }


  signUp(data:signUp):void{
 
    // call method from seller-auth service
    this.seller.userSignUp(data)
  }
  login(data:signUp):void{
    this.authError = '';
   // console.warn(data)
    this.seller.userlogin(data);
    this.seller.isLoginError.subscribe((isError) => {
      if(isError){
        this.authError = "Email and password is not correct"
      }
    })
  }

  openLogin(){
    this.showLogin = true;
  }
  openSignup(){
    this.showLogin = false
  }
    
    
}
