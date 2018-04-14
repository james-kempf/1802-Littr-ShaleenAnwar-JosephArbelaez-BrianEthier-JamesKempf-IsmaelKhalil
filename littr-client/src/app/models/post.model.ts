import { Cat } from "./cat.model";
import { Image } from "./image.model";

export class Post {
    id: number;
    poster: Cat;
    timePosted: any;
    image: Image;
    text: string;

    constructor(id: number, poster: Cat, timePosted: any, image: Image, text: string) {
        this.id=id;
        this.poster=poster;
        this.timePosted=timePosted;
        this.image=image;
        this.text=text;
    }
}