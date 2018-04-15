import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Response } from '@angular/http';
import { LITTR_URL } from '../../environments/environment.prod';
import 'rxjs/Rx';
import { Cat } from '../models/cat.model';
import { PasswordToken } from '../models/passwordToken.model';
import { ClientMessage } from '../models/clientMessage.model';

@Injectable()
export class PasswordRecoveryService {

  constructor(private http: HttpClient) { }

  public recoverPassword(email: string): Observable<ClientMessage> {
    return this.http
      .post(`${LITTR_URL}/password-recovery`, email)
      .catch(this.handleError);
  }

  public resetPassword(passwordToken: PasswordToken): Observable<ClientMessage> {
    return this.http
      .post(`${LITTR_URL}/password-reset`, passwordToken)
      .catch(this.handleError);
  }

  private handleError(response: Response) {
    return Observable.throw(response);
  }
}
