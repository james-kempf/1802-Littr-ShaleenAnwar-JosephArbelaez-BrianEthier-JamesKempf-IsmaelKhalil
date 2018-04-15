import { Component, OnInit } from '@angular/core';
import { ClientMessage } from '../../models/clientMessage.model';
import { PasswordRecoveryService } from '../../services/password-recovery.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/filter';
import { PasswordToken } from '../../models/passwordToken.model';
import { PasswordRecoveryComponent } from '../password-recovery/password-recovery.component';
import { Cat } from '../../models/cat.model';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.css']
})
export class PasswordResetComponent implements OnInit {

  title: string = "Reset Password";
  clientMessage: ClientMessage;
  token: string;
  password: string;
  repeatPassword: string;

  constructor(private passwordRecoveryService: PasswordRecoveryService, private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.queryParams
      .filter(params => params.token)
      .subscribe(params => {
        this.token = params.token;
        console.log(this.token);
      });
  }

  public resetPassword() {
    let passwordToken = new PasswordToken(
      new Cat(0, null, this.password, null, null, null, null), this.token
    );
    if (this.password === this.repeatPassword) {
      this.passwordRecoveryService.resetPassword(passwordToken)
      .subscribe(
        data => this.clientMessage = data,
        responseError => this.clientMessage = responseError.error
      )
    } else {
      this.clientMessage = new ClientMessage("PASSWORD MISMATCH", false);
    }
  }
}
