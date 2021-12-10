import { createAction, props } from "@ngrx/store";
import { Post } from "../model/post.model";

export const addPost = createAction('CREATE_POST', props<{ post: Post }>());
export const updatePost = createAction('UPDATE_POST', props<{ post: Post }>());
export const deletePost = createAction('DELETE_POST', props<{ id: string }>());

export const getListData = createAction('GET_LIST_DATA');
export const getDataSuccess = createAction('GET_DATA_SUCCESS', props<{ data: Post[] }>());