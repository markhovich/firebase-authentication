import { Component } from '@angular/core';
import { AuthService } from './_services/auth/auth.service';
import { Router } from '@angular/router';
import { User } from './_model/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'firebase-auth';
  
  constructor(public authService: AuthService, private router: Router){
  }
  
  logout(){
    this.authService.logout().subscribe(
      res => {
        this.router.navigate(['/login']);
      }, err => {
        console.error(err);
      }
    );
  }
}
