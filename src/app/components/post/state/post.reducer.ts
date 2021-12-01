import { createReducer, on } from "@ngrx/store";
import { addPost, deletePost, updatePost } from "./post.action";
import { initialState } from "./post.state";

const _postReducer = createReducer(
   initialState,
   on(addPost, (state, action) => {
      let post = { ...action.post };
      post.id = (state.dataPost.length + 1).toString();
      return {
         ...state,
         dataPost: [...state.dataPost, post]
      }
   }),
   on(updatePost, (state, action) => {

      const updatedPost = state.dataPost.map(res => {
         return action.post.id === res.id ? action.post : res
      })

      return {
         ...state,
         dataPost: updatedPost
      }
   }),
   on(deletePost, (state, { id }) => {

      const deletedPost = state.dataPost.filter(res => {
         return res.id !== id;
      })

      return {
         ...state,
         dataPost: deletedPost
      }
   }),
);

export function postReducer(state, action) {
   return _postReducer(state, action);
}