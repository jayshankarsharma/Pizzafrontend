import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class AuthGaurdService implements CanActivate {
  constructor(public router: Router) {}
  canActivate(): boolean {
    if (localStorage.getItem('userloggedin') === 'true') {
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }
}
