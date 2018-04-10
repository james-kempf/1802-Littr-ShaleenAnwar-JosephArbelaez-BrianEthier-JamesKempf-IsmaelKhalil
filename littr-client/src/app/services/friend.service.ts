import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Response } from '@angular/http';
import { LITTR_URL } from '../../environments/environment.prod';
import 'rxjs/Rx';
import { friendship } from '../models/friendship.model';
import { Cat } from '../models/cat.model';

@Injectable()
export class FriendService {

  constructor(private http: HttpClient) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({
      withCredentials: true
    });
    return next.handle(request);
  }

  public addFriend(cat: Cat) {
    return this.http
      .post(`${LITTR_URL}/add-friends`, cat);
  }

  public getAllFriends() {
    return this.http
      .get(`${LITTR_URL}/all-friends`);
  }

  public getAllFriendships() {
    return this.http
      .get(`${LITTR_URL}/all-friendships`);
  }

  public approveFriend(friendship: friendship) {
    return this.http
      .post(`${LITTR_URL}/aprrove-friendships`, friendship);
  }

  public denyFriend(friendship: friendship) {
    return this.http
      .post(`${LITTR_URL}/delete-friendships`, friendship);
  }
}
