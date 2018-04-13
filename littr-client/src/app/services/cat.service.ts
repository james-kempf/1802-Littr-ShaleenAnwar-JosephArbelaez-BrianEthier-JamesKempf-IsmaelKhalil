import { Injectable } from '@angular/core';
<<<<<<< HEAD
=======

>>>>>>> development
import { Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
<<<<<<< HEAD
=======

>>>>>>> development
import { Cat } from '../models/cat.model';
import { ClientMessage } from '../models/clientMessage.model';
import { LITTR_URL } from '../../environments/environment.prod';

<<<<<<< HEAD
@Injectable()
export class CatService {
    
    constructor(private http: HttpClient) { }

    public updateCat(cat: Cat) {
        return this.http
          .post(`${LITTR_URL}/update`, cat);
      }
}
=======

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

public handleError(error: Response) {
  console.log(`handleError`);
  return Observable.throw(error.statusText);
}
}
>>>>>>> development
