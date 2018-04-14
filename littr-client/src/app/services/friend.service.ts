import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Friendship } from '../models/friendship.model';
import { Cat } from '../models/cat.model';
import { ClientMessage } from '../models/clientMessage.model';
import { LITTR_URL } from '../../environments/environment';

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

  public approveFriendship(friendship: Friendship): Observable<ClientMessage> {
    return this.http
      .post(`${LITTR_URL}/approve-friendship`, friendship)
      .catch(this.handleError);
  }

  public deleteFriendship(friendship: Friendship): Observable<ClientMessage> {
    console.log(friendship);
    return this.http
      .post(`${LITTR_URL}/delete-friendship`, friendship)
      .catch(this.handleError);
  }

  private handleError(response: Response) {
    console.log("Catch error");
    return Observable.throw(response);
  }
}
