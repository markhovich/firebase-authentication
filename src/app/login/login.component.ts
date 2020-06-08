import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  submitted: boolean = false;
  loginForm: FormGroup;
  error: string;

  constructor(private as: AuthService, private formBuilder: FormBuilder, private router: Router){}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  get f(){ return this.loginForm.controls};

  onSubmit(){
    this.submitted = true;

    if(this.loginForm.invalid){
      return;
    }

    const values = this.loginForm.value;
    console.log(values)

    this.as.login(values.email, values.password).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/posts']);
      }, err => {
        console.error(err);
        this.error = 'Email et/ou mot de passe incorrects';
        console.error(this.error);

      }
    );

  }
}
