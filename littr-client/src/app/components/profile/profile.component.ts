import { Component, OnInit } from '@angular/core';
import { Cat } from '../../models/cat.model';
import { HttpClient } from '@angular/common/http';
import { UploadFileService } from '../../services/uploadFile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  title = 'Profile';
  image = 'https://s3.amazonaws.com/revature.1802february.littr/littr/petmd-cat-happy-10.jpg';
  selectedFiles: FileList;

  constructor(private uploadService: UploadFileService) {}

  ngOnInit() {
  }
  upload(){
    const file = this.selectedFiles.item(0);
    this.uploadService.uploadFile(file);
    this.image ='https://s3.amazonaws.com/revature.1802february.littr/littr/' + file.name;
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }
}
