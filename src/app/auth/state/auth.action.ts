import { createAction, props } from "@ngrx/store";
import { User } from "../model/user.model";

export const loginStart = createAction('LOGIN_START', props<{ email: string; password: string }>());
export const loginSuccess = createAction('LOGIN_SUCCESS', props<{ user: User; redirect: boolean }>());

export const signUpStart = createAction('SIGNUP_START', props<{ email: string; password: string }>());
export const signUpSuccess = createAction('SIGNUP_SUCCESS', props<{ user: User; redirect: boolean }>());

export const autoLogin = createAction('AUTO_LOGIN');
export const autoLogout = createAction('AUTO_LOGOUT');