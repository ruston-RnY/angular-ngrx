import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthResponseData } from '../auth/model/auth.model';
import { User } from '../auth/model/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  API_KEY = environment.FIRE_BASE_API_KEY;

  constructor(
    private http: HttpClient
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
}
