import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { autoLogin } from './auth/state/auth.action';
import { AppState } from './components/app.state';
import { getErrorMessage, getLoading } from './shared/shared.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngrx-try';

  showLoading: Observable<boolean>;
  errorMessage: Observable<string>;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.showLoading = this.store.select(getLoading);
    this.errorMessage = this.store.select(getErrorMessage);

    this.store.dispatch(autoLogin());
  }
}
