import { Image } from "./image.model";

export class Cat {
  id: number;
  name: string;
  username: string;
  password: string;
  email: string;
  bio: string;
  profilePic: string;

  constructor(id: number, name: string, username: string, password: string, email: string, bio: string, profilePic: string) {
    this.id = id;
    this.name = name;
    this.username = username;
    this.password = password;
    this.email = email;
    this.bio = bio;
    this.profilePic = profilePic;
  }
}