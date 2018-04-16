import { Component, OnInit } from '@angular/core';
import { CatService } from '../../services/cat.service';
import { Cat } from '../../models/cat.model';
import { ClientMessage } from '../../models/clientMessage.model';

@Component({
  selector: 'app-update-cat',
  templateUrl: './update-cat.component.html',
  styleUrls: ['./update-cat.component.css']
})
export class UpdateCatComponent implements OnInit {
  title = "Update Your Cat`s Info Below:";

  //Constructor Injection
  constructor(private catService: CatService) { }
  
  ngOnInit() { 
    this.getCatInfo();
    console.log(this.cat.catName);
  }

  public cat: Cat = <Cat>JSON.parse(sessionStorage.getItem("loggedCat"));
  
  public clientMessage: ClientMessage = new ClientMessage('',false);

  public getCatInfo() : void{
    console.log("calling update method")
    this.catService.getCat(this.cat)
    .subscribe(
      data => this.cat = data,
      responseError => this.clientMessage = responseError.error
    );
  }

  public updateCat(cat: Cat): void{
    console.log("service layer about to call STS")
    this.catService.updateCat(this.cat)
    .subscribe(
      data => this.clientMessage = data,
      responseError => this.clientMessage = responseError.error
    );
}
}
