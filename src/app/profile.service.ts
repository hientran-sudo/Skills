import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private isLoggedIn:boolean;
  constructor() { }

  public loggedInStatus(){
    this.isLoggedIn = false;
    return this.isLoggedIn;
  }
}
