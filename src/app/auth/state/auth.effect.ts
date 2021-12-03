import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects"
import { AuthService } from "src/app/services/auth.service";
import { loginStart, loginSuccess, signUpStart, signUpSuccess } from "./auth.action";
import { exhaustMap, map } from "rxjs/operators";


@Injectable()
export class AuthEffects {

   constructor(
      private actions$: Actions,
      private authServices: AuthService
   ) { }

   login$ = createEffect(() => {
      return this.actions$.pipe(
         ofType(loginStart),
         exhaustMap((action) => {
            return this.authServices
               .login(action.email, action.password)
               .pipe(map(data => {
                  return loginSuccess();
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