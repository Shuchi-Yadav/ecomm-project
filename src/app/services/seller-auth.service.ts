import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { login, signUp } from '../data-type';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class SellerAuthService {
  isSellerLoggedIn = new BehaviorSubject<boolean>(false);
  isLoginError = new EventEmitter<boolean>(false)
  constructor(private http: HttpClient, private route: Router) { }

  userSignUp(data:signUp){
     this.http.post('http://localhost:3000/seller', 
    data, { observe: 'response'}).subscribe((result)=>{
      if(result){
        localStorage.setItem('seller', JSON.stringify(result.body))
        this.route.navigate(['seller-home'])
      }
      this.isSellerLoggedIn.next(true);
      localStorage.setItem('seller', JSON.stringify(result.body))
      this.route.navigate(['seller-home'])
    })
  }

  reloadSeller(){
    if(localStorage.getItem('seller')){
     this.isSellerLoggedIn.next(true);
      this.route.navigate(['seller-home'])
    }
  }

  userlogin(data:login){
    console.warn(data);
    this.http.get(`http://localhost:3000/seller?email=${data.email}&password=${data.password}` , { observe: 'response' })
    .subscribe((result:any) => {
      console.warn(result)
      if(result && result.body && result.body.length){
        console.warn("user logged in");
        localStorage.setItem('seller', JSON.stringify(result.body))
        this.route.navigate(['seller-home'])
    }else{
      console.warn("user logged in failsed");
      this.isLoginError.emit(true)
    }
  })
  }

}
