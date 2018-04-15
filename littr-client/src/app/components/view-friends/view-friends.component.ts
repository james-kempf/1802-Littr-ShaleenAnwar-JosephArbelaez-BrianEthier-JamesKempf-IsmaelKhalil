import { Component, OnInit } from '@angular/core';
import { FriendService } from '../../services/friend.service';
import { Friendship } from '../../models/friendship.model';
import { Cat } from '../../models/cat.model';
import { Router } from '@angular/router';
import { LOCATION_INITIALIZED } from '@angular/common';
import { ClientMessage } from '../../models/clientMessage.model';

@Component({
  selector: 'app-view-friends',
  templateUrl: './view-friends.component.html',
  styleUrls: ['./view-friends.component.css']
})
export class ViewFriendsComponent implements OnInit {

  title = 'Friends';
  cat: Cat = <Cat>JSON.parse(sessionStorage.getItem("loggedCat"));
  friends: Cat[] = [];
  friendsPending: Cat[] = [];
  friendships: Friendship[] = [];
  clientMessage: ClientMessage

  constructor(private friendService: FriendService, private router: Router) { }

  ngOnInit() {
    this.getFriendships();
  }

  public getFriendships() {
    this.friendService.getAllFriendships().subscribe(
      data => this.setFriends(data),
      responseError => {
        console.log('Error: ' + responseError);
      }
    );
  }

  public setFriends(data) {
    console.log(data);
    this.friendships = data;
    for (let i = 0; i < data.length; i++) {
      if (data[i].catA.id !== this.cat.id) {
        if (data[i].status.id === 1) {
          this.friendsPending[this.friendsPending.length] = data[i].catA;
        } else {
          this.friends[this.friends.length] = data[i].catA;
        }
      } else {
        if (data[i].status.id === 1) {
          this.friendsPending[this.friendsPending.length] = data[i].catB;
        } else {
          this.friends[this.friends.length] = data[i].catB;
        }
      }
    }
    console.log(this.friends);
    console.log(this.friendsPending);
  }

  public viewProfile(cat: Cat) {
    console.log(cat);
    this.router.navigateByUrl('/user?' + cat.id);
  }

  public approveFriendship(friend: Cat) {
    console.log('DELETE: ' + friend);
    for (let i = 0; i < this.friendships.length; i++) {
      if (friend == this.friendships[i].catA || friend == this.friendships[i].catB) {
        this.friendService.approveFriendship(this.friendships[i])
        .subscribe(
        data => {
          for (let i = 0; i < this.friendsPending.length; i++) {
            if (friend === this.friendsPending[i]) {
              this.friendsPending.splice(i, i + 1);
              this.friends[this.friends.length] = friend;
              break;
            }
          }
        },
        responseError => this.clientMessage = responseError.error
        );
      }
    }
  }

  public deleteFriendship(friend: Cat) {
    console.log('DELETE: ' + friend);
    for (let i = 0; i < this.friendships.length; i++) {
      if (friend == this.friendships[i].catA || friend == this.friendships[i].catB) {
        this.friendService.deleteFriendship(this.friendships[i])
        .subscribe(
        data => {
          for (let i = 0; i < this.friendsPending.length; i++) {
            if (friend === this.friendsPending[i]) {
              this.friendsPending.splice(i, i + 1);
              break;
            }
          }
          for (let i = 0; i < this.friends.length; i++) {
            if (friend === this.friends[i]) {
              this.friends.splice(i, i + 1);
              break;
            }
          }
        },
        responseError => this.clientMessage = responseError.error
        );
      }
    }
  }
}
