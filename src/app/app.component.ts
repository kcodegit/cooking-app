import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import { conf } from './firebase.conf.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }

  ngOnInit() {
    firebase.initializeApp({
      apiKey: conf.apiKey,
      authDomain: conf.authDomain,
    });
  }
}
