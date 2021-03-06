import { Injectable } from '@angular/core';

import { Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { Cat } from '../models/cat.model';
import { ClientMessage } from '../models/clientMessage.model';
import { LITTR_URL } from '../../environments/environment';


@Injectable()
export class CatService {

  constructor(private http: HttpClient) { }

  public registerCat(cat: Cat): Observable<ClientMessage> {
    return this.http
      .post(`${LITTR_URL}/register`, cat)
      .catch(this.handleError);
      
  }

  public getCat(cat: Cat):Observable<Cat> {
    return this.http
      .post(`${LITTR_URL}/getCat`, cat)
      .catch(this.handleError);
      
  }


  public updateCat(cat: Cat): Observable<ClientMessage> {
    console.log("service layer about to call STS")
    return  this.http
      .post(`${LITTR_URL}/update`, cat)
      .catch(this.handleError);
  }

  public getAllCats(): Observable<Cat[]> {
    return this.http
      .get(`${LITTR_URL}/all-cats`)
      .catch(this.handleError);
  }

  public handleError(error: Response) {
    console.log(`handleError`);
    return Observable.throw(error.statusText);
  }
}
