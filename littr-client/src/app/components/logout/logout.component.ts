import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Cat } from '../../models/cat.model';
import { ClientMessage } from '../../models/clientMessage.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  ngOnInit() {
    this.loginService.logout();
    this.router.navigateByUrl("/login");
  };

    constructor(private loginService: LoginService, private router: Router) {    }
}
