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
  //cat = getSession
  constructor(private uploadService: UploadFileService, private CatService: CatService) {}

  ngOnInit() {
    
  }
  upload(){
    const file = this.selectedFiles.item(0);
    //this.uploadService.uploadFile(file);
    //this.cat.profilePic ='https://s3.amazonaws.com/revature.1802february.littr/littr/' + file.name;
    //this.CatService.updateCat(this.cat)
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }
}
