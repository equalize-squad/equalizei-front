import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES }  from '@angular/router';

import { UsersComponent } from './+users';
import { SignUpComponent } from './+sign-up';
import { SignInComponent } from './+sign-in';

@Component({
  moduleId: module.id,
  selector: 'equalizei-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class AppComponent implements OnInit {
  title = 'Equalizei rocks!';

  constructor() {
  }

  ngOnInit() {
  }
}
