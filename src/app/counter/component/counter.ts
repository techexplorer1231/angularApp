import {Component} from 'angular2/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';

import {INCREMENT, DECREMENT, RESET} from '../reducer';

interface AppState {
  counter: number;
}

@Component({
    template: `
      <div mdl>
        <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" (click)="increment()">Increment</button>
        <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" (click)="decrement()">Decrement</button>
        <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" (click)="reset()">Reset</button>
        
        <div>Current Count: {{ counter | async }}</div>
      </div>
    `
})
export class Counter {
    counter: Observable<number>;
    constructor(public store: Store<AppState>){
        this.counter = store.select('counter');
    }
    increment(){
        this.store.dispatch({ type: INCREMENT });
    }
    decrement(){
        this.store.dispatch({ type: DECREMENT });
    }
    reset(){
        this.store.dispatch({ type: RESET });
    }
}
