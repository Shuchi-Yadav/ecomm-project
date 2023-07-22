import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { product } from '../data-type';

@Component({
  selector: 'app-seller-update-product',
  templateUrl: './seller-update-product.component.html',
  styleUrls: ['./seller-update-product.component.css']
})
export class SellerUpdateProductComponent {
  //flag
  productData: undefined | product;
  productUpdateMessage : undefined | string

  constructor( private route: ActivatedRoute, private product:ProductService, private router : Router){}
  ngOnInit():void{
    let productid = this.route.snapshot.paramMap.get('id');
    console.warn(productid);
    productid && this.product.getProduct(productid).subscribe((data)=>{
      console.warn(data);
      this.productData = data;
    })
  }
  updateProducts(data:product){
    if(this.productData){
      data.id = this.productData.id
    }
    //console.warn(data);
    this.product.updateProduct(data).subscribe((result)=>{
      if(result){
        this.productUpdateMessage = "Product is Update Successfully"  ;
        
      }
    })
    setTimeout(() => {
      this.productUpdateMessage = undefined; this.router.navigate(['seller-home'])
    }, 3000);
  }


}
  