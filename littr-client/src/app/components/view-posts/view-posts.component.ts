import { Component, OnInit } from '@angular/core';
import { Cat } from '../../models/cat.model';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/post.model';
import { ClientMessage } from '../../models/clientMessage.model';

@Component({
  selector: 'app-view-posts',
  templateUrl: './view-posts.component.html',
  styleUrls: ['./view-posts.component.css']
})
export class ViewPostsComponent implements OnInit {

  constructor(private postService: PostService) { }
  title = 'Recent Activity';
  cat: Cat = <Cat>JSON.parse(sessionStorage.getItem("loggedCat"));
  posts: Post[] = [];
  clientMessage: ClientMessage;

  ngOnInit() {
    this.getFriendsPosts();
  }


  public getFriendsPosts(): void {
    this.postService.friendsPosts(this.cat).subscribe(
        data => this.setPosts(data),
        responseError => {
          console.log('Error: ' + responseError);
        }
    );
    console.log(this.posts);
  }

  public setPosts(data): void {
    for (let i = 0; i < data.length; i++) {
    this.posts[i] = data[i];
    }
  }
}
