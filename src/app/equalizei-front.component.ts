import { Component, OnInit } from '@angular/core';
import { Router, Routes, ROUTER_PROVIDERS, ROUTER_DIRECTIVES } from '@angular/router';

import { HomeComponent } from './+home';
import { SignUpComponent } from './+sign-up';

@Component({
  moduleId: module.id,
  selector: 'equalizei-front-app',
  templateUrl: 'equalizei-front.component.html',
  styleUrls: ['equalizei-front.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})
@Routes([
  {path: '/home', component: HomeComponent},
  {path: '/sign_up', component: SignUpComponent}
])
export class EqualizeiFrontAppComponent implements OnInit {
  title = 'Equalizei rocks!';
  // constructor(private router: Router) {}
  ngOnInit() {
  //   this.router.navigate(['/home']);
  }
}
