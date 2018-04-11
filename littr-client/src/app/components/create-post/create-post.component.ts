import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post.model';
import { PostService } from '../../services/post.service';
import { Cat } from '../../models/cat.model';
import { ClientMessage } from '../../models/clientMessage.model';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  title = 'Post Maker';

//cat for testing
koushka: Cat = new Cat(1520, 'koushka', 'p4ssw0rd',
          'koushla','koushka@gmail.com','such purr')

  createdPost: Post = new Post(0,this.koushka,null,null,'');
  constructor(private postService: PostService) { }

  clientMessage: ClientMessage = new ClientMessage('', false);

  ngOnInit() {
  }

  public post(): void {
    this.postService.createPost(this.createdPost, this.koushka).subscribe(
      data => this.clientMessage=data,
      error => this.clientMessage.message = 'SOMETHING WENT WRONG',
    );
  }

}
