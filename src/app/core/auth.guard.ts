import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot, UrlTree, Router } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate, CanActivateChild {
  constructor(private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log('You are logged in!');
    return true;
    //this.router.navigate(['signit'], { queryParams: { returnUrl: state.url } } );
    //return false
  }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.canActivate(route, state);
  }

}
