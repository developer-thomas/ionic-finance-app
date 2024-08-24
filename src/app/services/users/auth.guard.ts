// auth.guard.ts
import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const isAuth = localStorage.getItem('userPayload');
    if (isAuth) {
      // evita que 2 usuários se conectem ao mesmo tempo
      localStorage.removeItem('userPayload');
      return true;
    } else {
      this.router.navigateByUrl('/login');
      return false;
    }
  }
}
