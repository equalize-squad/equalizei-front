import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES }  from '@angular/router';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';
import { FORM_DIRECTIVES, REACTIVE_FORM_DIRECTIVES } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'angular2-devise-token-auth';
import { MessageComponent } from '../shared/message/message.component';

@Component({
  moduleId: module.id,
  selector: 'app-sign-in',
  templateUrl: 'sign-in.component.html',
  styleUrls: ['sign-in.component.css'],
  directives: [
    FORM_DIRECTIVES,
    REACTIVE_FORM_DIRECTIVES,
    MessageComponent,
    ROUTER_DIRECTIVES,
    MD_BUTTON_DIRECTIVES,
    MD_INPUT_DIRECTIVES,
    MD_CARD_DIRECTIVES,
    MD_TOOLBAR_DIRECTIVES
  ]
})
export class SignInComponent implements OnInit {
  model = {email: '', password: ''};
  error:string = null;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
  }

  signIn() {
    this.authService
      .signIn({
        email: this.model.email,
        password: this.model.password
      })
      .map(res => res.json())
      .subscribe(res => {
          localStorage.setItem('user', JSON.stringify(res.data));
          this.router.navigate(['/users']);
        }, error => {
          this.error = error.errors.join(',');
        }
      );
  }
}
