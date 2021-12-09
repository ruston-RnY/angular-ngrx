import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects"
import { AuthService } from "src/app/services/auth.service";
import { autoLogin, autoLogout, loginStart, loginSuccess, signUpStart, signUpSuccess } from "./auth.action";
import { catchError, exhaustMap, map, mergeMap, tap } from "rxjs/operators";
import { createReducer, Store } from "@ngrx/store";
import { AppState } from "src/app/components/app.state";
import { setErrorMessage, setLoadingSpinner } from "src/app/shared/shared.action";
import { of } from "rxjs";
import { Router } from "@angular/router";


@Injectable()
export class AuthEffects {

   constructor(
      private actions$: Actions,
      private authServices: AuthService,
      private store: Store<AppState>,
      private router: Router
   ) { }

   login$ = createEffect(() => {
      return this.actions$.pipe(
         ofType(loginStart),
         exhaustMap((action) => {
            return this.authServices.login(action.email, action.password).pipe(
               map((data) => {
                  this.store.dispatch(setLoadingSpinner({ status: false }));
                  const user = this.authServices.formatUser(data);
                  this.authServices.setUserInLocalStorage(user);
                  return loginSuccess({ user, redirect: true });
               }),
               catchError((errResp) => {
                  this.store.dispatch(setLoadingSpinner({ status: false }));
                  const errorMessage = this.authServices.getErrorMessage(errResp.error.error.message);
                  return of(setErrorMessage({ message: errorMessage }))
               })
            );
         })
      );
   });

   signUp$ = createEffect(() => {
      return this.actions$.pipe(
         ofType(signUpStart),
         exhaustMap((action) => {
            return this.authServices
               .signUp(action.email, action.password)
               .pipe(map(data => {
                  this.store.dispatch(setLoadingSpinner({ status: false }));
                  const user = this.authServices.formatUser(data);
                  this.authServices.setUserInLocalStorage(user);
                  return signUpSuccess({ user, redirect: true });
               }),
                  catchError((errResp) => {
                     this.store.dispatch(setLoadingSpinner({ status: false }));
                     const errorMessage = this.authServices.getErrorMessage(errResp.error.error.message);
                     return of(setErrorMessage({ message: errorMessage }))
                  }))
         })
      );
   });

   loginRedirect$ = createEffect(() => {
      return this.actions$.pipe(
         ofType(...[loginSuccess, signUpSuccess]),
         tap((action) => {
            this.store.dispatch(setErrorMessage({ message: '' }));

            if (action.redirect) {
               this.router.navigate(['/'])
            }
         })
      );
   }, { dispatch: false });

   signUpRedirect$ = createEffect(() => {
      return this.actions$.pipe(
         ofType(signUpSuccess),
         tap((action) => {
            this.store.dispatch(setErrorMessage({ message: '' }));
            this.router.navigate(['/auth'])
         })
      );
   }, { dispatch: false });

   autoLogin$ = createEffect(() => {
      return this.actions$.pipe(
         ofType(autoLogin),
         mergeMap((action) => {
            const user = this.authServices.getUserFromLocalStorage();
            return of(loginSuccess({ user, redirect: false }));
         })
      )
   });

   autoLogout$ = createEffect(() => {
      return this.actions$.pipe(
         ofType(autoLogout),
         map((action) => {
            this.authServices.logout();
            this.router.navigate(['/auth']);
         })
      )
   }, { dispatch: false })
}