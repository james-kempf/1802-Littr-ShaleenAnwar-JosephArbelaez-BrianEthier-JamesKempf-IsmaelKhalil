import { Component, OnInit } from '@angular/core';
import { Cat } from '../../models/cat.model';
import { HttpClient } from '@angular/common/http';
import { UploadFileService } from '../../services/uploadFile.service';
import { CatService } from '../../services/cat.service';
import { ClientMessage } from '../../models/clientMessage.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  title = 'Profile';
  image = "";
  selectedFiles: FileList;
  fileUrl = "";
  public cat: Cat = new Cat(2151,'','Wolf', 'wolf', '97F80AE3504E76D546F00B5E30A434D1', 'wolf@gmail.com', '');

  constructor(private uploadService: UploadFileService, private CatService: CatService) {}

  ngOnInit() {
    this.image= this.cat.profilePic;
  }
  upload(){
    const file = this.selectedFiles.item(0);
    //this.uploadService.uploadFile(file);
    this.cat.profilePic ='https://s3.amazonaws.com/revature.1802february.littr/littr/' + file.name;
    this.CatService.updateCat(this.cat)
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }
}
