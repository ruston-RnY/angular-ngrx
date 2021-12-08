import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects"
import { AuthService } from "src/app/services/auth.service";
import { loginStart, loginSuccess, signUpStart, signUpSuccess } from "./auth.action";
import { exhaustMap, map } from "rxjs/operators";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/components/app.state";
import { setLoadingSpinner } from "src/app/shared/shared.action";


@Injectable()
export class AuthEffects {

   constructor(
      private actions$: Actions,
      private authServices: AuthService,
      private store: Store<AppState>
   ) { }

   login$ = createEffect(() => {
      return this.actions$.pipe(
         ofType(loginStart),
         exhaustMap((action) => {
            return this.authServices
               .login(action.email, action.password)
               .pipe(map(data => {
                  this.store.dispatch(setLoadingSpinner({ status: false }));
                  const user = this.authServices.formatUser(data);

                  return loginSuccess({ user });
               }))
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
                  return signUpSuccess();
               }))
         })
      );
   });
}