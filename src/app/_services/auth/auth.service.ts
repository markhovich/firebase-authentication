import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'src/app/_model/user';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: User;

  constructor(private afAuth: AngularFireAuth) { 
    
  }

  login(email: string, password: string): Observable<any>{
    var observable =  from(
      this.afAuth.signInWithEmailAndPassword(email, password)
      );

    return observable;
  }

  logout(){
    this.afAuth.signOut();
  }
}
