import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './components/counter/counter.component';
import { HomeComponent } from './components/home/home.component';
import { CreatePostComponent } from './components/post/create-post/create-post.component';
import { EditPostComponent } from './components/post/edit-post/edit-post.component';
import { PostListComponent } from './components/post/post-list/post-list.component';
import { PostComponent } from './components/post/post.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'counter', component: CounterComponent
  },
  {
    path: 'post', component: PostComponent,
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
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
