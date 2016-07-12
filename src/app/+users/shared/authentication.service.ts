import { Injectable } from '@angular/core';

import { AuthService } from 'angular2-devise-token-auth';
import { Observable } from 'rxjs/Observable';
import { User } from '../user/shared/user.model';

@Injectable()
export class AuthenticationService {

  private KEY = 'user';

  private login(user):void {
    localStorage.setItem(this.KEY, JSON.stringify(user));
  }

  constructor(private authService: AuthService) {}

  signUp(name:String, email:String, password:String, password_confirmation:String):Observable<User> {
    return Observable.create(observer => {
      this.authService
        .signUp({
          name: name,
          email: email,
          password: password,
          password_confirmation: password_confirmation
        })
        .map(res => res.json())
        .subscribe(
          res => {
            this.login(res.data);
            observer.next(res.data);
            observer.complete();
          },
          error => {
            observer.error(error.errors.full_messages);
          }
        );
    });
  }

  isLoggedIn():boolean {
    return !localStorage.getItem(this.KEY);
  }

  getUserLoggedIn():User {
    let userData = localStorage.getItem(this.KEY);
    return Object.assign(new User(), JSON.parse(userData));
  }
}
