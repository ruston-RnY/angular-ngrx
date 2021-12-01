import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../app.state';
import { changeName, customIncrement } from '../state/counter.action';
import { getName } from '../state/counter.selectors';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-counter-custom-input',
  templateUrl: './counter-custom-input.component.html',
  styleUrls: ['./counter-custom-input.component.scss']
})
export class CounterCustomInputComponent implements OnInit {
  value: number;
  name$: Observable<string>;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.name$ = this.store.select(getName);
  }

  onAdd() {
    this.store.dispatch(customIncrement({ value: +this.value }));
  }

  onChangeName() {
    this.store.dispatch(changeName());
  }

}
