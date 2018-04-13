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

  title = "Login";

    constructor(private loginService: LoginService, private router: Router) {    }

    public cat: Cat = new Cat(0, "", "", "", "", "", null);
    public catData: Cat = new Cat(0, "", "", "", "", "", null);

    public clientMessage: ClientMessage = new ClientMessage("", false);

    public login(): void {
      this.loginService.login(this.cat).subscribe(
        data => {
          console.log(data);
          if(data.hasOwnProperty("username")) {
            this.catData = <Cat>data;
            sessionStorage.setItem("loggedCat", JSON.stringify(this.catData));
            this.clientMessage.success;
            console.log(<Cat>JSON.parse(sessionStorage.getItem("loggedCat")).username);
            this.router.navigateByUrl("/home");
          } else if (data.hasOwnProperty("message")) {
            this.clientMessage.message = (<ClientMessage>data).message
          } else {
            this.clientMessage.message = "Invalid"
          }
        },
        error => {
          this.clientMessage.message = "Something went wrong"
          console.log(this.cat);
        }
      )
    }
  }