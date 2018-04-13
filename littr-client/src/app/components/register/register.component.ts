import { Component } from '@angular/core';

import { CatService } from '../../services/cat.service';
import { Cat } from '../../models/cat.model';
import { ClientMessage } from '../../models/clientMessage.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
    title = 'Register Cat';

    //Constructor Injection
    constructor(private catService: CatService) { }

    //For data binding
    public cat: Cat = new Cat(0,'','','','',null);

    //To message the user
    public clientMessage: ClientMessage = new ClientMessage('',false);

    public registerCat(): void {
      console.log(this.cat.catName)
      this.catService.registerCat(this.cat)
      .subscribe(
        data => this.clientMessage = data,
        responseError => this.clientMessage = responseError.error
      );
    }
}
