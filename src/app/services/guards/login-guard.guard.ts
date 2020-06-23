import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthService} from '../auth/auth.service';
import {falseIfMissing} from 'protractor/built/util';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {
  }
  canActivate(): boolean {

    console.log ( 'Paso por el login Guard');
    if (!this.authService.getAuthenticatedUser()){
      this.router.navigate(['/login']).then();
      return false;
    }

    return true;
  }
}
