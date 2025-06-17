import { Injectable } from '@angular/core';
import SecureLS from 'secure-ls';

@Injectable({
  providedIn: 'root'
})
export class FirewallService {

  ls = new SecureLS();

  constructor() { }

  getUserIsLogged():Boolean {
    if (this.ls.get('user')) {
      return true;
    }
    return false;
  }

}
