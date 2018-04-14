import { Component, OnInit } from '@angular/core';
import { Cat } from '../../models/cat.model';
import { HttpClient } from '@angular/common/http';
import { CatService } from '../../services/cat.service';
import { ClientMessage } from '../../models/clientMessage.model';
import { UploadFileService } from '../../services/uploadFile.service';
import { Image } from '../../models/image.model';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/post.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public catData: Cat = new Cat(1050,
    'atlas',
    '97F80AE3504E76D546F00B5E30A434D1',
    'Atlas', 
    'jamesk4321@gmail.com',  
    'He flop', 
    new Image(50, 
      'https://s3.amazonaws.com/revature.1802february.littr/littr/fatcat.jpg'));

  ngOnInit() {
    sessionStorage.setItem("loggedCat", JSON.stringify(this.catData));
    
    //Getting all posts that the cat can see.
    this.findAllCatPosts();
  }

  public cat: Cat = <Cat>JSON.parse(sessionStorage.getItem("loggedCat"));
  public post1: Post = new Post(1, this.cat, null, null, "Happy Day!");
  public post2: Post = new Post(2, this.cat, null, null, "Sad Day =(");
  public post3: Post = new Post(3, this.cat, null, new Image(50, 'https://s3.amazonaws.com/revature.1802february.littr/littr/fatcat.jpg'),"");
  selectedFiles: FileList;
  fileUrl = "";
  public posts: Post[] = [this.post1, this.post2, this.post3];
  
  constructor(private uploadService: UploadFileService,
      private CatService: CatService,
      private PostService: PostService) {}


  upload(){
    const file = this.selectedFiles.item(0);
    //this.uploadService.uploadFile(file);
    this.cat.profilePic.imgURL ='https://s3.amazonaws.com/revature.1802february.littr/littr/' + file.name;
    sessionStorage.setItem("loggedCat", JSON.stringify(this.cat));    
    console.log(this.cat);
    this.CatService.updateCat(this.cat)
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }  

  public findAllCatPosts(): void {
    this.PostService.viewCatPosts(this.cat)
      .subscribe(
        data => this.posts = data,
        //responseError => this.clientMessage = responseError.error
      );
  }
}
