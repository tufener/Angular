import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/tps/models/product';
import { Router } from "@angular/router";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.sass']
})
export class ProductDetailComponent implements OnInit {

  selectedProduct: Product = new Product();


  constructor(
    private _route: ActivatedRoute,
    private _productsService: ProductsService,
    private _router: Router

  ) {


    let selectedProductId = this._route.snapshot.paramMap.get("id");

    if (selectedProductId != "") {
      this._productsService.getProductById(parseInt(selectedProductId)).subscribe((data) => {
        this.selectedProduct = data;
        console.log("this.selectedProduct ==> ", this.selectedProduct);
      })

    }

  }

  onBack(): void {
    this._router.navigate(["/catalogue"]);
  }

  ngOnInit() {
  }

}
