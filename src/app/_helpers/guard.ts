import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../_services/auth/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate() {
      const logged = this.authService.logged;
        console.log(logged);
        if (logged) {
            return true;
        }

        this.router.navigate(['/login']);
        return false;  
    }
}