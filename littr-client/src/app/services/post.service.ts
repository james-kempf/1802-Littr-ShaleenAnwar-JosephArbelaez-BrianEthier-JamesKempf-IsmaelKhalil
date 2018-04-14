import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/post.model';
import { Observable } from 'rxjs/Observable';
import { LITTR_URL } from '../../environments/environment';
import { ClientMessage } from '../models/clientMessage.model';
import { Cat } from '../models/cat.model';

@Injectable()
export class PostService {

  constructor(private http: HttpClient) { }

  public createPost(post: Post): Observable<ClientMessage> {
    console.log(`executing createPost`);
    return this.http
          .post(`${LITTR_URL}/submitPost`,post)
          .catch(this.handleError);
  }

  public viewCatPosts(cat: Cat): Observable<Post[]> {
    return this.http
          .post(`${LITTR_URL}/findAllPostByCat`, cat)
          .catch(this.handleError);
  }
  
  public editPost(post: Post): Observable<Post> {
    return this.http
          .post(`${LITTR_URL}/editPost`, post)
          .catch(this.handleError);
  }

  public handleError(error: Response) {
    console.log(`handleError`);
    return Observable.throw(error.statusText);
  }
}
