import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'src/app/_model/user';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth) { 
    this.user = this.afAuth.authState;
  }

  login(email: string, password: string): Observable<any>{
    return from(
      this.afAuth.signInWithEmailAndPassword(email, password)
      );
  }

  logout(): Observable<any>{
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
