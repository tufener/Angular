import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"; 

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {
  private _productUrl = "./assets/api/products/products.json";
  constructor(private _http: HttpClient) { }

  getProducts(){
    return this._http.get(this._productUrl);
  }
}
