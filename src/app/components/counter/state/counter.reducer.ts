import { createReducer, on } from "@ngrx/store";
import { changeName, customIncrement, decrement, increment, reset } from "./counter.action";
import { counterState } from "./counter.state";

const _counterReducer = createReducer(
   counterState,
   on(increment, (state) => {
      return {
         ...state,
         counter: state.counter + 1
      }
   }),
   on(decrement, (state) => {
      return {
         ...state,
         counter: state.counter - 1
      }
   }),
   on(reset, (state) => {
      return {
         ...state,
         counter: 0
      }
   }),
   on(customIncrement, (state, action) => {
      return {
         ...state,
         counter: state.counter + action.value
      }
   }),
   on(changeName, (state) => {
      return {
         ...state,
         name: 'Hallo im modified'
      }
   })
)

export function counterReducer(state, action) {
   return _counterReducer(state, action)
}