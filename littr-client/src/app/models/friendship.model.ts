import { Cat } from "./cat.model";

export class Friendship {

  catA: Cat;
  catB: Cat;
  status: number;
  time: string;

  constructor(catA: Cat, catB: Cat, status: number, time: string) {
    this.catA = catA;
    this.catB = catB;
    this.status = status;
    this.time = time;
  }
}