import { Component, OnInit } from '@angular/core';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';
import { NgForm } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from 'angular2-devise-token-auth';

@Component({
  moduleId: module.id,
  selector: 'app-sign-in',
  templateUrl: 'sign-in.component.html',
  styleUrls: ['sign-in.component.css'],
  directives: [MD_BUTTON_DIRECTIVES, MD_INPUT_DIRECTIVES, MD_CARD_DIRECTIVES, MD_TOOLBAR_DIRECTIVES]
})
export class SignInComponent implements OnInit {
  model = {email: '', password: ''};

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
      });
  }
}
