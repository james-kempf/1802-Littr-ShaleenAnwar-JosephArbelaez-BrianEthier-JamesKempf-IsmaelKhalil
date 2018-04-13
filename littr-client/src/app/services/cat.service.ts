import { Injectable } from '@angular/core';

import { Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { Cat } from '../models/cat.model';
import { ClientMessage } from '../models/clientMessage.model';
import { LITTR_URL } from '../../environments/environment.prod';


@Injectable()
export class CatService {

  constructor(private http: HttpClient) { }

  public registerCat(cat: Cat): Observable<ClientMessage> {
    return this.http
      .post(`${LITTR_URL}/register`, cat)
      .catch(this.handleError);
      
  }

  public updateCat(cat: Cat): Observable<ClientMessage> {
    return  this.http
      .post(`${LITTR_URL}/update`, cat)
      .catch(this.handleError);
}

public handleError(error: Response) {
  console.log(`handleError`);
  return Observable.throw(error.statusText);
}
}
