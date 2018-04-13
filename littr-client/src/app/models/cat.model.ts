export class Cat {
  id: number;
  bio: string;
  catName: string;
  username: string;
  password: string;
  email: string;
  profilePic: string;

  constructor(id: number, catName: string, username: string, password: string, email: string, profilePic: string, bio:string) {
    this.id = id;
    this.bio = bio;
    this.catName = catName;
    this.username = username;
    this.password = password;
    this.email = email;
    this.profilePic = profilePic;
  }
}