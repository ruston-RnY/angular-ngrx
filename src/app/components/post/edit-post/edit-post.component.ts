import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from '../../app.state';
import { Post } from '../model/post.model';
import { updatePost } from '../state/post.action';
import { getPostById } from '../state/post.selector';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent implements OnInit {
  post: Post;
  editForm: FormGroup;
  subscription: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store<AppState>,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(res => {
      const id = res.id;

      this.subscription = this.store.select(getPostById, { id }).subscribe(res => {
        this.post = res;
        this.onEditForm();
      })
    })
  }

  onEditForm() {
    this.editForm = new FormGroup({
      title: new FormControl(this.post.title, [Validators.required, Validators.minLength(6)]),
      description: new FormControl(this.post.description, [Validators.required])
    })
  }

  onSubmit() {
    if (!this.editForm.valid) {
      return
    }

    const post: Post = {
      id: this.post.id,
      title: this.editForm.value.title,
      description: this.editForm.value.description
    }

    // dispatch action
    this.store.dispatch(updatePost({ post }));
    this.router.navigate(['post']);
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
