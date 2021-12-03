import { createAction, props } from "@ngrx/store";

export const loginStart = createAction('LOGIN_START', props<{ email: string; password: string }>());
export const loginSuccess = createAction('LOGIN_SUCCESS');

export const signUpStart = createAction('SIGNUP_START', props<{ email: string; password: string }>());
export const signUpSuccess = createAction('SIGNUP_SUCCESS');