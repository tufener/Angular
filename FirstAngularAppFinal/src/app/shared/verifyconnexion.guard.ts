import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VerifyconnexionGuard implements CanActivate {

  constructor(private _router : Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
      const isConnectedValue = localStorage.getItem("IsConnected");
      let returnValue: boolean = false;

      if(isConnectedValue != null){
        if(JSON.parse(localStorage.getItem("IsConnected")))
          returnValue = true;
        else
          return this._router.navigate(['/inscription']);
      }
      else {
        return this._router.navigate(['/inscription']);
      }

      return returnValue;
  }
  
}


/*

console.log("VerifyconnexionGuard ==> " ,localStorage.getItem("IsConnected"));
      

*/
