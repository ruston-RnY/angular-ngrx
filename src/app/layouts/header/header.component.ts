import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { isAuthenticated } from 'src/app/auth/state/auth.selector';
import { AppState } from 'src/app/components/app.state';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isAuthecticated: Observable<boolean>;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.isAuthecticated = this.store.select(isAuthenticated);
  }

}
