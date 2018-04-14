import { Cat } from "./cat.model";

export class Friendship {

  catA: Cat;
  catB: Cat;
  status: number;
  timestamp: string;

  constructor(catA: Cat, catB: Cat, status: number, timestamp: string) {
    this.catA = catA;
    this.catB = catB;
    this.status = status;
    this.timestamp = timestamp
  }
}