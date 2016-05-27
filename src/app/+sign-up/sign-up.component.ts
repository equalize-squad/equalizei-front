import { Component, OnInit } from '@angular/core';
import { User } from './user';

@Component({
  moduleId: module.id,
  selector: 'app-sign-up',
  templateUrl: 'sign-up.component.html',
  styleUrls: ['sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  message = 'Welcome to Equalize!';

  constructor() {}

  ngOnInit() {
  }

}
