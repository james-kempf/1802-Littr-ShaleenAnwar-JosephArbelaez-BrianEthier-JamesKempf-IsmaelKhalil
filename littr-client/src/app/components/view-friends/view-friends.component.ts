import { Component, OnInit } from '@angular/core';
import { FriendService } from '../../services/friend.service';
import { Friendship } from '../../models/friendship.model';
import { Cat } from '../../models/cat.model';

@Component({
  selector: 'app-view-friends',
  templateUrl: './view-friends.component.html',
  styleUrls: ['./view-friends.component.css']
})
export class ViewFriendsComponent implements OnInit {

  title = 'Friends';
  friendships: Friendship[];

  constructor(private friendService: FriendService) { }

  ngOnInit() {
    // this.friendships[0] = new Friendship(
    //   new Cat(1, 'Atlas', 'atlas', 'password', 'atlas@gmail.com', 'img'),
    //   new Cat(1, 'Kouska', 'kouska', 'password', 'koushka@gmail.com', 'img'),
    //   1,
    //   'timestamp'
    // );
  }

}
