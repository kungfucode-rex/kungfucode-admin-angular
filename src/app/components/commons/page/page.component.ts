import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {select, Store} from '@ngrx/store';
import {DECREMENT, INCREMENT, RESET} from '../../../../store';

interface AppState {
  count: number;
}

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  count$: Observable<number>;

  constructor(private store: Store<AppState>) {
    this.count$ = store.pipe(select('count'));
  }

  ngOnInit() {
  }

  increment () {
    this.store.dispatch({ type: INCREMENT });
  }
  decrement () {
    this.store.dispatch({ type: DECREMENT });
  }
  reset () {
    this.store.dispatch({ type: RESET });
  }
}
