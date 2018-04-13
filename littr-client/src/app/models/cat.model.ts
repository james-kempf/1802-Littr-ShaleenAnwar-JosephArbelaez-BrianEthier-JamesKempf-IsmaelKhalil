export class Cat {
  id: number;
  catName: string;
  username: string;
  password: string;
  email: string;
  profilePic: string;

  constructor(id: number, catName: string, username: string, password: string, email: string, profilePic: string) {
    this.id = id;
    this.catName = catName;
    this.username = username;
    this.password = password;
    this.email = email;
    this.profilePic = profilePic;
  }
}