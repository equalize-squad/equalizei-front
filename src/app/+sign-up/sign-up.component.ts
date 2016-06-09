import { Component, OnInit } from '@angular/core';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';
import { NgForm } from '@angular/common';

import { User } from '../+users/shared/user.model';

@Component({
  moduleId: module.id,
  selector: 'app-sign-up',
  templateUrl: 'sign-up.component.html',
  styleUrls: ['sign-up.component.css'],
  directives: [MD_BUTTON_DIRECTIVES, MD_INPUT_DIRECTIVES, MD_CARD_DIRECTIVES, MD_TOOLBAR_DIRECTIVES]
})
export class SignUpComponent implements OnInit {

  message = null;
  submitted = false;
  model = new User();

  constructor() {
  }

  ngOnInit() {
    this.reset();
  }

  onSubmit() {
    this.submitted = true;
    this.message = `Welcome ${this.model.name}!`;
  }

  onEdit() {
    this.reset();
  }

  reset() {
    this.submitted = false;
    this.message = 'Sign Up Works!';
  }
}
