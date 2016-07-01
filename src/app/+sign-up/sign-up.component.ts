import { Component, OnInit } from '@angular/core';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';
import { NgForm } from '@angular/common';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import { AuthService } from 'angular2-devise-token-auth';

import { AlertComponent } from '../shared/alert/alert.component';
import { User } from '../+users/user/shared/user.model';

@Component({
  moduleId: module.id,
  selector: 'app-sign-up',
  templateUrl: 'sign-up.component.html',
  styleUrls: ['sign-up.component.css'],
  directives: [AlertComponent, ROUTER_DIRECTIVES, MD_BUTTON_DIRECTIVES, MD_INPUT_DIRECTIVES, MD_CARD_DIRECTIVES, MD_TOOLBAR_DIRECTIVES]
})
export class SignUpComponent implements OnInit {
  error = null;
  model = new User();

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {}

  onSubmit() {
    this.authService
      .signUp({
        name: this.model.name,
        email: this.model.email,
        password: this.model.password,
        password_confirmation: this.model.password_confirmation,
      })
      .map(res => res.json())
      .subscribe(res => {
          localStorage.setItem('user', JSON.stringify(res.data));
          this.router.navigate(['/users']);
        }, error => {
          this.error = error.errors.full_messages;
        }
      );
  }
}
