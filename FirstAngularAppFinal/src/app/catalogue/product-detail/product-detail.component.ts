import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/tps/models/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.sass']
})
export class ProductDetailComponent implements OnInit {

  selectedProduct : Product = new Product();

  constructor( 
    private _router: ActivatedRoute, 
    private _productsService : ProductsService
  ) { 

    
    let selectedProductId = this._router.snapshot.paramMap.get("id");

    if(selectedProductId != ""){
      this._productsService.getProductById(parseInt(selectedProductId)).subscribe((data)=>{
        this.selectedProduct = data;
        console.log("this.selectedProduct ==> ", this.selectedProduct);
      })
    }
  }

  ngOnInit() {
  }

}
