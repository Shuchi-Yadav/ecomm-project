import { CanActivateFn } from '@angular/router';
import {inject} from '@angular/core';
import {Router} from '@angular/router';
import {tap} from 'rxjs';
import { SellerAuthService } from './services/seller-auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const sellerService = inject(SellerAuthService)
  if(localStorage.getItem('seller')){
    return true
  }
 return sellerService.isSellerLoggedIn

  return false;
};
