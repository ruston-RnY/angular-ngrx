import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

// components
import { PostComponent } from "./post.component";
import { PostListComponent } from "./post-list/post-list.component";
import { CreatePostComponent } from "./create-post/create-post.component";
import { EditPostComponent } from "./edit-post/edit-post.component";
import { ReactiveFormsModule } from "@angular/forms";
import { StoreModule } from "@ngrx/store";
import { postReducer } from "./state/post.reducer";
import { POST_STATE } from "./state/post.selector";

const routes: Routes = [
   {
      path: '',
      component: PostComponent,
      children: [
         {
            path: '', component: PostListComponent
         },
         {
            path: 'add', component: CreatePostComponent
         },
         {
            path: 'edit/:id', component: EditPostComponent
         },
      ]
   }
]

@NgModule({
   declarations: [
      PostComponent,
      PostListComponent,
      CreatePostComponent,
      EditPostComponent,
   ],
   imports: [
      CommonModule,
      RouterModule.forChild(routes),
      ReactiveFormsModule,
      StoreModule.forFeature(POST_STATE, postReducer)
   ]
})

export class PostModule { }