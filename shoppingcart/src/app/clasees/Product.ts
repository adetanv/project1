import { Observable } from 'rxjs';

export class Product  {
    src:string;
    title:string;
    href:string;
    subtitle:string;

    constructor(src:string, title:string, href:string, subtitle:string){
        this.href = href;
        this.src = src;
        this.title = title;
        this.subtitle = subtitle;
    }
}