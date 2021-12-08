import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthResponseData } from '../auth/model/auth.model';
import { User } from '../auth/model/user.model';
import { autoLogout } from '../auth/state/auth.action';
import { AppState } from '../components/app.state';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  API_KEY = environment.FIRE_BASE_API_KEY;
  timeoutInterval: any;

  constructor(
    private http: HttpClient,
    private store: Store<AppState>
  ) { }

  login(email: string, password: string): Observable<AuthResponseData> {
    return this.http.post<AuthResponseData>(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.API_KEY}`, { email, password, returnSecureToken: true });
  }

  signUp(email: string, password: string) {
    return this.http.post<AuthResponseData>(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.API_KEY}`, { email, password, returnSecureToken: true });
  };

  formatUser(data: AuthResponseData) {
    const expirationDate = new Date(new Date().getTime() + + data.expiresIn * 1000);
    const user = new User(data.email, data.idToken, data.localId, expirationDate);

    return user;
  }

  getErrorMessage(message: string) {
    switch (message) {
      case 'EMAIL_NOT_FOUND':
        return 'Email not found';
      case 'INVALID_PASSWORD':
        return 'Invalid Password';
      case 'EMAIL_EXISTS':
        return 'Email already exists';
      default:
        return 'Uknown error occured'
    }
  }

  setUserInLocalStorage(user: User) {
    localStorage.setItem('userData', JSON.stringify(user));
    this.runTimeOut(user);
  }

  runTimeOut(user) {
    const todayDate = new Date().getTime();
    const expirationDate = user.expireDate.getTime();
    const timeInterval = expirationDate - todayDate;

    this.timeoutInterval = setTimeout(() => {
      this.store.dispatch(autoLogout());
    }, timeInterval);
  }

  getUserFromLocalStorage() {
    const userDataString = localStorage.getItem('userData');
    if (userDataString) {
      const userData = JSON.parse(userDataString);
      const expirationDate = new Date(userData.expirationDate);
      const user = new User(userData.email, userData.token, userData.localId, expirationDate);

      this.runTimeOut(user);
      return user;
    }
    return null
  }

  logout() {
    localStorage.removeItem('userData');
    if (this.timeoutInterval) {
      clearTimeout(this.timeoutInterval);
      this.timeoutInterval = null;
    }
  }
}
