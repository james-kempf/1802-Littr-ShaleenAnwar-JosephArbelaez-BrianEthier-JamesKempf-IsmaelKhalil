import { Image } from './image.model';

export class Cat {
  id: number;
  username: string;
  password: string;
  catName: string;
  email: string;
  bio: string;
  profilePic: Image;

  constructor(id: number, username: string, password: string, catName: string, email: string,  bio: string, profilePic: Image) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.catName = catName;
    this.email = email;
    this.bio = bio;
    this.profilePic = profilePic;
  }
}