/*
 * @Since: 2020-09-26 23:50:10
 * @LastEditTime: 2020-09-27 21:14:33
 * @LastEditors: Zhao.J
 * @FilePath: \angular-contacts\src\app\auth.guard.ts
 * @Description: 
 */
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree,Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router
  ){}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const token = window.localStorage.getItem('auth_token');
    if (!token){
      this.router.navigate(['/signin'])
    }
    return true;
  }
  
}
