import { Component, OnInit } from '@angular/core';
import { FriendService } from '../../services/friend.service';
import { Friendship } from '../../models/friendship.model';
import { Cat } from '../../models/cat.model';
import { Router } from '@angular/router';
import { LOCATION_INITIALIZED } from '@angular/common';

@Component({
  selector: 'app-view-friends',
  templateUrl: './view-friends.component.html',
  styleUrls: ['./view-friends.component.css']
})
export class ViewFriendsComponent implements OnInit {

  title = 'Friends';
  friends: Cat[];
  friendships: Friendship[];

  constructor(private friendService: FriendService, private router: Router) { }

  ngOnInit() {
    this.friendService.getAllFriendships().subscribe(
      data => this.setFriends(data),
      responseError => {
        console.log(responseError);
      }
    );
  }

  public setFriends(data) {
    this.friendships = data;
    for (let i = 0; i < data.length; i++) {
      this.friends[i] = data[i].catA();
    }
  }

  public viewProfile(cat: Cat) {
    console.log(cat);
    this.router.navigateByUrl('/user?' + cat.id);
  }

  public deleteFriendship(cat: Cat) {
    console.log('DELETE: ' + cat);
    let friendship: Friendship;
    for (let i = 0; i < this.friendships.length; i++) {
      if (cat == this.friendships[i].catA || cat == this.friendships[i].catB) {
        friendship = this.friendships[i];
        break;
      }
    }
    this.friendService.deleteFriendship(friendship);
  }
}
