import * as firebase from 'firebase';
import { stringify } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  token: string;

  constructor(private router: Router) {}

  signupUser(email: string, password: string) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(res => console.log(res))
      .catch(e => console.log(e));
  }

  signinUser(email: string, password: string) {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        firebase
          .auth()
          .currentUser.getIdToken()
          .then((tk: string) => {
            this.token = tk;
            this.router.navigate(['/']);
          });
      })
      .catch(e => console.log(e));
  }

  getToken() {
    firebase
      .auth()
      .currentUser.getIdToken()
      .then((tk: string) => {
        this.token = tk;
      });
    return this.token;
  }

  isAuthenticated() {
    return this.token != null;
  }

  signOut() {
    this.token = null;
  }
}
