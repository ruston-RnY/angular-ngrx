import { createAction, props } from "@ngrx/store";
import { Post } from "../model/post.model";

export const addPost = createAction('CREATE_POST', props<{ post: Post }>());
export const updatePost = createAction('UPDATE_POST', props<{ post: Post }>());
export const deletePost = createAction('DELETE_POST', props<{ id: string }>());