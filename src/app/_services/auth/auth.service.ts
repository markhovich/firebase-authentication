import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'src/app/_model/user';
import { Observable, from } from 'rxjs';
import { Router } from '@angular/router';
import { auth } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  userData: Observable<firebase.User>;
  logged: boolean = false;
  platform: string;
  
  constructor(private afAuth: AngularFireAuth) { 
    this.userData = this.afAuth.authState;
  }
  
  login(email: string, password: string): Observable<any>{
    const prom = this.afAuth.signInWithEmailAndPassword(email, password);
    
    if(prom){
      this.logged = true;
    }
    return from(prom);
  }
  
  logout(): Observable<any>{
    const prom = this.afAuth.signOut();
    
    if(prom){
      this.logged = false;
    }
    return from(prom);
  }
  
  signup(email: string, password: string): Observable<any>{
    return from(
      this.afAuth.createUserWithEmailAndPassword(email, password)
      );
    }
    
    loginWithFacebook(){
      const prom = this.afAuth.signInWithPopup( new auth.FacebookAuthProvider());
      if(prom){
        this.logged = true;
      }    
      return from(prom);
    }
    
    loginWithGoogle(){
      console.log('Google Auth under construction...');
      
    }
    
    loginWithGithub(){
      console.log('Github Auth under construction...');
      
    }
    
  }
