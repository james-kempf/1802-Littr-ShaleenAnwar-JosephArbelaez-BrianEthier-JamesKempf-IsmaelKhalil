import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Cat } from '../../models/cat.model';
import { ClientMessage } from '../../models/clientMessage.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  title = "Welcome to Littr! Please Login:";
  returnUrl: string;

    constructor(private loginService: LoginService, private router: Router) {    }

    public cat: Cat = new Cat(0, "", "", "", "", "", null);
    public catData: Cat = new Cat(0, "", "", "", "", "", null);

    public clientMessage: ClientMessage = new ClientMessage("", false);x

    public login(): void {
      this.loginService.login(this.cat).subscribe(
        data => {
          console.log(data);
          if(data.hasOwnProperty("username")) {
            this.catData = <Cat>data;
            sessionStorage.setItem("loggedCat", JSON.stringify(this.catData));
            this.clientMessage.success;
            console.log(<Cat>JSON.parse(sessionStorage.getItem("loggedCat")).username);
            this.router.navigateByUrl("/friends-posts");
          } else if (data.hasOwnProperty("message")) {
            this.clientMessage.message = (<ClientMessage>data).message
          } else {
            this.clientMessage.message = "Invalid credientials"
          }
        },
        error => {
          this.clientMessage.message = "Invalid credentials"
          console.log(this.cat);
        }
      )
    }
  }