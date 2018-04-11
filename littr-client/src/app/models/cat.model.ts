export class Cat {
  id: number;
  name: string;
  username: string;
  password: string;
  email: string;
  profilePic: string;

  constructor(id: number, name: string, username: string, password: string, email: string, profilePic: string) {
    this.id = id;
    this.name = name;
    this.username = username;
    this.password = password;
    this.email = email;
    this.profilePic = profilePic;
  }
}