import { counterReducer } from "./counter/state/counter.reducer";
import { CounterState } from "./counter/state/counter.state";
import { postReducer } from "./post/state/post.reducer";
import { PostState } from "./post/state/post.state";

export interface AppState {
   counter: CounterState;
   post: PostState;
}

export const AppReducer = {
   counter: counterReducer,
   post: postReducer,
}