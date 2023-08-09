import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { product } from '../data-type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  popularProducts: undefined | product[]; 
  trendyProducts: undefined | product[];

  constructor( private product: ProductService){

  }

  ngOnInit(){
    this.product.popularProducts().subscribe((items)=>{
      console.warn(items);
      this.popularProducts = items;
    });

    this.product.trendyProducts().subscribe((items)=>{
      this.trendyProducts = items;
    })
  }
  
}
