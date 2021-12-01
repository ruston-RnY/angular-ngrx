import { Post } from "../model/post.model";

export interface PostState {
   dataPost: Post[];
}

export const initialState: PostState = {
   dataPost: [
      {
         id: '1', title: 'Data 1', description: 'this is first data'
      },
      {
         id: '2', title: 'Data 2', description: 'this is second data'
      },
   ]
}