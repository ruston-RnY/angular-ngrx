import { createFeatureSelector, createSelector, props } from "@ngrx/store";
import { PostState } from "./post.state";

const getPostState = createFeatureSelector<PostState>('post');

export const getPost = createSelector(getPostState, (state) => {
   return state.dataPost;
})

export const getPostById = createSelector(getPostState, (state, props) => {
   return state.dataPost.find(res => res.id === props.id);
})