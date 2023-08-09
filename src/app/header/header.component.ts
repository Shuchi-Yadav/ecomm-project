import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { ProductService } from '../services/product.service';
import { product } from '../data-type';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  //property define
  menuType: string = 'default';
  sellerName: string = '';
  //name: string = '';
  searchProduct: undefined | product[];
  constructor(private route : Router, private product: ProductService){}

  ngOnInit(): void{
    this.route.events.subscribe((val:any) => {
      //console.warn(val.url);
      if(localStorage.getItem('seller') && val.url.includes('seller')){
        this.menuType = "seller";
        if(localStorage.getItem('seller')){
          let sellerStore=localStorage.getItem('seller');
         // console.warn(sellerStore)
          let sellerData = sellerStore && JSON.parse(sellerStore)[0];
         
          this.sellerName = sellerData.name;
          this.menuType = 'seller'
      }
      }else{
        this.menuType = "default"
      }
    
    })
  }

  logout(){
    localStorage.removeItem('seller');
    this.route.navigate(['/'])
  }

  searchProducts(query:KeyboardEvent){
    if(query){
      const element = query.target as HTMLInputElement;
      this.product.searchProducts(element.value).subscribe((result)=>{
        // console.warn(result);
        if(result.length > 5){
          result.length = 5;  
        }
         this.searchProduct = result;
      })
    }
  }
  hideSearch(){
   this.searchProduct = undefined
  }
  redirectToDetails(id:number){
    this.route.navigate(['/details/'+id])
  }
  submitSearch(val:string){
    this.route.navigate([`search/${val}`])
  }
}
