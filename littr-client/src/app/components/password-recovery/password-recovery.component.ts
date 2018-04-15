import { Component, OnInit } from '@angular/core';
import { PasswordRecoveryService } from '../../services/password-recovery.service';
import { ClientMessage } from '../../models/clientMessage.model';

@Component({
  selector: 'app-password-recovery',
  templateUrl: './password-recovery.component.html',
  styleUrls: ['./password-recovery.component.css']
})
export class PasswordRecoveryComponent implements OnInit {

  title = 'Recover Password';
  email: string;
  clientMessage: ClientMessage;

  constructor(private passwordRecoveryService: PasswordRecoveryService) { }

  ngOnInit() {
  }

  sendEmail() {
    console.log(this.email);
    this.passwordRecoveryService.recoverPassword(this.email)
    .subscribe(
        data => this.clientMessage = data,
        responseError => this.clientMessage = responseError.error
      );
  }
}
