import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Post } from '../components/post/model/post.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  getData(): Observable<Post[]> {
    return this.http.get<Post[]>("http://localhost:3000/dataPost")
      .pipe(map(data => {
        const post: Post[] = [];
        for (let key in data) {
          post.push({ ...data[key], id: key })
        }

        return post;
      }));
  }
}
