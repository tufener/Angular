import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';

export interface IsDirty {
  isDirty () : boolean | Observable<boolean>;
}

@Injectable({
  providedIn: 'root'
})


export class VerifySavedSignUpGuard implements CanDeactivate<IsDirty> {
  canDeactivate(
    component : IsDirty,
    currentRoute : ActivatedRouteSnapshot,
    currentState : RouterStateSnapshot,
    nextState ?: RouterStateSnapshot
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(!component.isDirty())
        alert("Voulez-vous enregistrer les données ? ");
        
      return component.isDirty();
  }
  
}
