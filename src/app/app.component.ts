import { Component, OnInit } from '@angular/core';
import { FORM_DIRECTIVES } from '@angular/forms';
import { MdButton } from '@angular2-material/button/button';
import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav/sidenav';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list/list';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import { MdIcon } from '@angular2-material/icon/icon';
import { MdToolbar } from '@angular2-material/toolbar/toolbar';
import { Router, NavigationStart, ROUTER_DIRECTIVES }  from '@angular/router';

import { SessionController } from 'angular2-devise-token-auth';
import { Message, MessageComponent, MessageService } from './shared/message/index';
import { SignUpComponent } from './+sign-up';
import { SignInComponent } from './+sign-in';
import { UsersComponent } from './+users';

@Component({
  moduleId: module.id,
  selector: 'equalizei-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [
    FORM_DIRECTIVES,
    MessageComponent,
    MdButton,
    MdIcon,
    MD_SIDENAV_DIRECTIVES,
    MD_LIST_DIRECTIVES,
    MD_INPUT_DIRECTIVES,
    MdToolbar,
    ROUTER_DIRECTIVES
  ],
  providers: [MessageService]
})
export class AppComponent implements OnInit {
  title = 'Equalize rocks!';
  message:Message = null;

  constructor(messageService:MessageService, router:Router) {
    router.events.subscribe(event => {
      if(event instanceof NavigationStart) {
        this.clearMessage();
      }
    });
    messageService.messenger.subscribe(message => {
      this.showMessage(message);
    });
  }

  ngOnInit() {}

  userSignedIn():boolean {
    return SessionController.userSignedIn();
  }

  private showMessage(message:Message):void {
    this.message = message;
  }
  
  private clearMessage():void {
    this.message = null;
  }
}
