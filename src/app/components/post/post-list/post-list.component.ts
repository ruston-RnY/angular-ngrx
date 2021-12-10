import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../app.state';
import { Post } from '../model/post.model';
import { deletePost, getListData } from '../state/post.action';
import { getPost } from '../state/post.selector';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  posts$: Observable<Post[]>;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.posts$ = this.store.select(getPost);
    this.store.dispatch(getListData());
  }

  onDelete(id) {
    if (confirm('are you sure ?')) {
      this.store.dispatch(deletePost({ id }));
    }

  }

}
