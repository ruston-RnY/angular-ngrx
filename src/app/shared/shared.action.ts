import { createAction, props } from "@ngrx/store";

export const setLoadingSpinner = createAction('SET_LOADING_ACTION', props<{ status: boolean }>());
export const setErrorMessage = createAction('SET_ERROR_MESSAGE', props<{ message: string }>());