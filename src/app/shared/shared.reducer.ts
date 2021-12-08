import { createReducer, on } from "@ngrx/store";
import { initialState } from "../components/post/state/post.state";
import { setLoadingSpinner } from "./shared.action";

const _sharedReducer = createReducer(
   initialState,
   on(setLoadingSpinner, (state, action) => {
      return {
         ...state,
         showLoading: action.status,
      }
   }),
);

export function SharedReducer(state, action) {
   return _sharedReducer(state, action);
}