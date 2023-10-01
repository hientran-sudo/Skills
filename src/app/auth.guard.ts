import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthorizationService } from './authorization.service';
import { ProfileService } from './profile.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  //constructor(private authService: AuthorizationService){
    constructor(private profile: ProfileService){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if (!this.profile.loggedInStatus)
        return false;
      else 
      return true;
      }
    //if (!this.authService.isAuthorized())
    //return false;
    //else 
    //return true;

  }  
