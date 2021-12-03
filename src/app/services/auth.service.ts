import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

interface AuthResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  API_KEY = environment.FIRE_BASE_API_KEY;

  constructor(
    private http: HttpClient
  ) { }

  login(email: string, password: string) {
    return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.API_KEY}`, { email, password, returnSecureToken: true });
  }

  signUp(email: string, password: string) {
    return this.http.post<AuthResponseData>(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.API_KEY}`, { email, password, returnSecureToken: true });
  };
}
