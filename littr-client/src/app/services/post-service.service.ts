import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/post.model';
import { Observable } from 'rxjs/Observable';
import { LITTR_URL } from '../../environments/environment';
import { ClientMessage } from '../models/clientMessage.model';
import { Cat } from '../models/cat.model';

@Injectable()
export class PostServiceService {

  constructor(private http: HttpClient) { }

  public createPost(post: Post): Observable<ClientMessage> {
    return this.http
          .post(`${LITTR_URL}/createPost`,post)
          .catch(this.handleError);
  }

  public viewCatPosts(cat: Cat): Observable<Post[]> {
    return this.http
          .post(`${LITTR_URL}/viewCatPosts`, cat)
          .catch(this.handleError);
  }

  public editPost(post: Post): Observable<Post> {
    return this.http
          .post(`${LITTR_URL}/editPost`, post)
          .catch(this.handleError);
  }

  public handleError(error: Response) {
    return Observable.throw(error.statusText);
  }
}
