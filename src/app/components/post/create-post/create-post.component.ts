import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import { Post } from '../model/post.model';
import { addPost } from '../state/post.action';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {
  createForm: FormGroup;

  constructor(
    private store: Store<AppState>,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.createForm = new FormGroup({
      title: new FormControl(null, [Validators.required, Validators.minLength(6)]),
      description: new FormControl(null, Validators.required)
    })
  }

  showTitleErrors() {
    const titleField = this.createForm.get('title');

    if (titleField.touched && !titleField.valid) {
      if (titleField.errors.required) {
        return 'Title is required'
      } else if (titleField.errors.minlength) {
        return 'Title must be 6 characters'
      } else {
        return ''
      }
    }
  }

  showDescriptionErrors() {
    const descriptionField = this.createForm.get('description');
    if (descriptionField.touched && !descriptionField.valid) {
      if (descriptionField.errors.required) {
        return 'Description is required'
      } else {
        ''
      }
    }
  }

  onAdd() {
    if (!this.createForm.valid) {
      return;
    }

    const post: Post = {
      title: this.createForm.value.title,
      description: this.createForm.value.description,
    };

    this.store.dispatch(addPost({ post }));
    this.route.navigate(['post'])
  }
}
