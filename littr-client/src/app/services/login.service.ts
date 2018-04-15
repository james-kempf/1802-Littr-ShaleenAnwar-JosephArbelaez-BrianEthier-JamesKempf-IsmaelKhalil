import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { LITTR_URL } from '../../environments/environment';
import { ClientMessage } from '../models/clientMessage.model';
import { Cat } from '../models/cat.model';
import 'rxjs/Rx';

@Injectable()
export class LoginService {

  constructor(private http: HttpClient) { }

  public login(cat: Cat): Observable<Object> {
    return this.http
          .post(`${LITTR_URL}/login`,cat)
          .catch(this.handleError);
  }

  public logout() {
    console.log("logout")
    sessionStorage.setItem("loggedCat", "");
    return this.http
          .get(`${LITTR_URL}/logout`)
          .catch(this.handleError);
  }

  public handleError(error: Response) {
    return Observable.throw(error.statusText);
  }
}