import { Component, EventEmitter, OnInit } from '@angular/core';
import { FORM_DIRECTIVES } from '@angular/forms';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';

import { AuthenticationService } from '../+users/shared/authentication.service';
import { Message, MessageService, MessageComponent } from '../shared/message/index';
import { User } from '../+users/user/shared/user.model';

@Component({
  moduleId: module.id,
  selector: 'app-sign-up',
  templateUrl: 'sign-up.component.html',
  styleUrls: ['sign-up.component.css'],
  directives: [
    FORM_DIRECTIVES,
    MessageComponent,
    MD_BUTTON_DIRECTIVES,
    MD_INPUT_DIRECTIVES,
    MD_CARD_DIRECTIVES,
    MD_TOOLBAR_DIRECTIVES,
    ROUTER_DIRECTIVES
  ],
  providers: [AuthenticationService]
})
export class SignUpComponent implements OnInit {
  error = null;
  model = new User();

  constructor(private authenticationService: AuthenticationService, private router: Router, private messageService: MessageService) {
  }

  ngOnInit() {}

  onSubmit() {
    this.error = null;
    this.authenticationService
      .signUp(
        this.model.name,
        this.model.email,
        this.model.password,
        this.model.password_confirmation
      )
      .subscribe(
        user => {
          this.router.navigate(['/sign-in']);
          this.messageService.messenger.emit(new Message('success', 'Sucesso!', 'Você receberá um e-mail de confirmação para acessar nossa plataforma.'));
        },
        error => {
          this.error = new Message('error', 'Erro!', error);
        }
      );
  }
}