import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  
  private _productUrl = './assets/api/users/users.json';
  constructor(private _http: HttpClient) { 

  }

  GetUsers() {
    return this._http.get(this._productUrl);
  }
}
