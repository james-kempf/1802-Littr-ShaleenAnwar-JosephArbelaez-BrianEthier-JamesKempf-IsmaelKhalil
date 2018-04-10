import { Component, OnInit } from '@angular/core';
import { FriendService } from '../../services/friend.service';
import { friendship } from '../../models/friendship.model';

@Component({
  selector: 'app-view-friends',
  templateUrl: './view-friends.component.html',
  styleUrls: ['./view-friends.component.css']
})
export class ViewFriendsComponent implements OnInit {

  friendships: friendship[];

  constructor(private friendService: FriendService) { }

  ngOnInit() {
  }

}
