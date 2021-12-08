import { AuthReducer } from "../auth/state/auth.reducer";
import { AUTH_STATE_NAME } from "../auth/state/auth.selector";
import { AuthState } from "../auth/state/auth.state";
import { SharedReducer } from "../shared/shared.reducer";
import { SHARED_STATE_NAME } from "../shared/shared.selector";
import { SharedState } from "../shared/shared.state";

// import { counterReducer } from "./counter/state/counter.reducer";
// import { CounterState } from "./counter/state/counter.state";
// import { postReducer } from "./post/state/post.reducer";
// import { PostState } from "./post/state/post.state";

export interface AppState {
   [SHARED_STATE_NAME]: SharedState;
   [AUTH_STATE_NAME]: AuthState;
}

export const AppReducer = {
   [SHARED_STATE_NAME]: SharedReducer,
   [AUTH_STATE_NAME]: AuthReducer,
}