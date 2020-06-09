import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'src/app/_model/user';
import { Observable, from } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData: Observable<firebase.User>;
  logged: boolean = false;

  constructor(private afAuth: AngularFireAuth) { 
    this.userData = this.afAuth.authState;
  }

  login(email: string, password: string): Observable<any>{
    this.logged = true;
    return from(
      this.afAuth.signInWithEmailAndPassword(email, password)
      );
  }

  logout(): Observable<any>{
    this.logged = false;
    return from(
      this.afAuth.signOut()
    );
  }

  signup(email: string, password: string): Observable<any>{
    return from(
      this.afAuth.createUserWithEmailAndPassword(email, password)
    );
  }

}
