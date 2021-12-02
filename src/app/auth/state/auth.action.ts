import { createAction, props } from "@ngrx/store";

export const loginStart = createAction('LOGIN_START', props<{ email: string; password: string }>());

export const loginSuccess = createAction('LOGIN_SUCCESS');