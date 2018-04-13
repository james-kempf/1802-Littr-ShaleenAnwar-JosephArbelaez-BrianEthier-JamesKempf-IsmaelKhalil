import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { LITTR_URL } from '../../environments/environment.prod';
import { Friendship } from '../models/friendship.model';
import { Cat } from '../models/cat.model';
import { ClientMessage } from '../models/clientMessage.model';

@Injectable()
export class FriendService {

  constructor(private http: HttpClient) { }

  public addFriend(cat: Cat): Observable<ClientMessage> {
    return this.http
      .post(`${LITTR_URL}/add-friends`, cat)
      .catch(this.handleError);
  }

  public getAllFriends(): Observable<Cat[]> {
    console.log("Getting all friends");
    return this.http
      .get(`${LITTR_URL}/all-friends`)
      .catch(this.handleError);
  }

  public getAllFriendships(): Observable<Friendship[]> {
    return this.http
      .get(`${LITTR_URL}/all-friendships`)
      .catch(this.handleError);
  }

  public approveFriend(friendship: Friendship): Observable<ClientMessage> {
    return this.http
      .post(`${LITTR_URL}/aprrove-friendships`, friendship)
      .catch(this.handleError);
  }

  public deleteFriendship(friendship: Friendship): Observable<ClientMessage> {
    return this.http
      .post(`${LITTR_URL}/delete-friendships`, friendship)
      .catch(this.handleError);
  }

  private handleError(response: Response) {
    console.log("Catch error");
    return Observable.throw(response);
  }
}
