import { createReducer, on } from "@ngrx/store";
import { autoLogout, loginSuccess, signUpSuccess } from "./auth.action";
import { initialState } from "./auth.state";

const _authReducer = createReducer(initialState,
   on(loginSuccess, (state, action) => {
      return {
         ...state,
         user: action.user
      }
   }),
   // on(signUpSuccess, (state, action) => {
   //    return {
   //       ...state,
   //       user: action.user
   //    }
   // }),
   on(autoLogout, (state) => {
      return {
         ...state,
         user: null
      }
   }),
);

export function AuthReducer(state, action) {
   return _authReducer(state, action);
}