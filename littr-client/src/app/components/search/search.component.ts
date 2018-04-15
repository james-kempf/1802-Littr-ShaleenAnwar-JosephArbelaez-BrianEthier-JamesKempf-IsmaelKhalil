import { Component, OnInit } from '@angular/core';
import { Cat } from '../../models/cat.model';
import { CatService } from '../../services/cat.service';
import { ClientMessage } from '../../models/clientMessage.model';
import { FriendService } from '../../services/friend.service';
import { Router } from '@angular/router';
import { LOCATION_INITIALIZED } from '@angular/common';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  title: string = "All Cats";
  cats: Cat[] = [];
  cat: Cat = <Cat>JSON.parse(sessionStorage.getItem("loggedCat"));
  friends: Cat[] = [];
  clientMessage: ClientMessage;

  constructor(private catService: CatService, private friendService: FriendService) { }

  ngOnInit() {
    this.getAllCats();
  }

  private addFriend(cat: Cat) {
    console.log("adding friend");
    let pair: Cat[] = [cat, this.cat];
    this.friendService.addFriend(pair)
    .subscribe(
      data => {
        for (let i = 0; i < this.cats.length; i++) {
          if (this.cats[i] === cat) {
            this.cats.splice(i, i + 1);
            break;
          }
        }
      },
      responseError => this.clientMessage = responseError.error
    );
  }

  private getAllCats() {
    console.log("getting cats");
    this.catService.getAllCats()
    .subscribe(
      data => {
        this.cats = data
        this.getAllFriends();
      },
      responseError => this.clientMessage = responseError.error
    );
  }

  private getAllFriends() {
    console.log("getting friends");
    this.friendService.getAllFriends()
    .subscribe(
      data => {
        this.friends = data
        for (let i = 0; i < this.cats.length; i++) {
          for (let j = 0; j < this.friends.length; j++) {
            if (this.cats[i].id === this.friends[j].id || this.cats[i].id === this.cat.id) {
              this.cats.splice(i, i + 1);
            }
          }
        }
      },
      responseError => this.clientMessage = responseError.error
    );
  }
}
