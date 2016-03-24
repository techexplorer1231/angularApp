/*
 * Angular 2 decorators and services
 */
import {Component} from 'angular2/core';
import {RouteConfig, Router} from 'angular2/router';
import {Devtools} from '@ngrx/devtools';

import {Counter} from './counter/component';
import {counter} from './counter/reducer';

/*
 * App Component
 * Top Level Component
 */
@Component({
    selector: 'app',
    template: require('./app.html'),
    styles: [require('./app.css')],
    directives: [Devtools]
})
@RouteConfig([
    { path: '/', name: 'Counter', component: Counter, useAsDefault: true }
])
export class App { }
