import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../tps/models/product';
import { map } from 'rxjs/operators'; 

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private _productUrl = './assets/api/products/products.json';

  constructor(private _httpClient : HttpClient) { }

  GetProducts() : Observable<Product[]> {
    return this._httpClient.get<Product[]>(this._productUrl);
  }

  getProductById(id: number): Observable<Product>{
    return this.GetProducts().pipe(
        map(txs => txs.find(txn => txn.productId === id))
    );
  }
}
