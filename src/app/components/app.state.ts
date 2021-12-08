import { SharedReducer } from "../shared/shared.reducer";
import { SHARED_STATE_NAME } from "../shared/shared.selector";
import { SharedState } from "../shared/shared.state";
import { counterReducer } from "./counter/state/counter.reducer";
import { CounterState } from "./counter/state/counter.state";
import { postReducer } from "./post/state/post.reducer";
import { PostState } from "./post/state/post.state";

export interface AppState {
   // counter: CounterState;
   // post: PostState;
   [SHARED_STATE_NAME]: SharedState;
}

export const AppReducer = {
   // counter: counterReducer,
   // post: postReducer,
   [SHARED_STATE_NAME]: SharedReducer
}