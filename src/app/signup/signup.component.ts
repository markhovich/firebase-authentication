import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ɵINTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS } from '@angular/platform-browser-dynamic';
import { AuthService } from '../_services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  submitted: boolean = false;
  signupForm: FormGroup;

  error: string;
  
  constructor(private formBuilder: FormBuilder,
              private as: AuthService,
              private router: Router) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  onSubmit(){
    this.submitted = true;

    if(this.signupForm.invalid){
      return;
    }

    const values = this.signupForm.value;

    this.as.signup(values.email, values.password).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/login']);
      }, err => {
        console.error(err);
      }
    )
  }
}
