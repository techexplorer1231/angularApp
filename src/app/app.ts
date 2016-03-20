/*
 * Angular 2 decorators and services
 */
import {Component} from 'angular2/core';
import {RouteConfig, Router} from 'angular2/router';
import {Devtools} from '@ngrx/devtools';

import {Home} from './home';
import {counter} from './reducer';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  directives: [ Devtools ],
  template: `
      <ngrx-devtools toggle-command="ctrl-k" position-command="ctrl-e"></ngrx-devtools>
      <router-outlet></router-outlet>
  `
})
@RouteConfig([
  { path: '/',      name: 'Home', component: Home, useAsDefault: true }
])
export class App {}
