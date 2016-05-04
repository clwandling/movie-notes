/**
 * Created by cory on 5/3/2016.
 */
export class Video {
    id : string;
    url: string;
    name: string;

    constructor(id: string, url: string, name: string) {
        this.id = id;
        this.url = url;
        this.name = name;
    }
}