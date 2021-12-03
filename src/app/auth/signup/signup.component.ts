import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/components/app.state';
import { signUpStart } from '../state/auth.action';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signUpForm: FormGroup;

  constructor(
    private store: Store<AppState>,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required])
    })
  }

  onSubmit() {
    const email = this.signUpForm.value.email;
    const password = this.signUpForm.value.password;
    this.store.dispatch(signUpStart({ email, password }));
    this.route.navigate(['home']);
  }
}
