import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-users',
  templateUrl: 'users.component.html',
  styleUrls: ['users.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class UsersComponent implements OnInit {
  constructor() {}
  ngOnInit() {
  }
}
