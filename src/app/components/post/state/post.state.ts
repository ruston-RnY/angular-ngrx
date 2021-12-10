import { Post } from "../model/post.model";

export interface PostState {
   dataPost: Post[];
}

export const initialState: PostState = {
   dataPost: null
}