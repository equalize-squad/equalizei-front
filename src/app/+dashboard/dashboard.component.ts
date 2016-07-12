import { Component, OnInit } from '@angular/core';

import { User } from '../+users/user/shared/user.model';

@Component({
  moduleId: module.id,
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  title:string = 'Equalize';
  user: User = null;

  constructor() {}

  ngOnInit() {
  }
}
