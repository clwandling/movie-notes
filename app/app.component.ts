import {Component} from '@angular/core';
import {Video} from './video';
import {VideoListComponent} from './video-list.component';

@Component({
    selector: 'my-app',
    template: `
                <h1 class="jumbotron">{{title}}</h1>
                <video-list [videos]="videos"></video-list>
               `,
    directives: [VideoListComponent]
})
export class AppComponent {
    title : string = "Movie Notes";
    videos : Array<Video>;

    constructor() {
        this.videos = [
            new Video("aaa", "aaa", "aaa"),
            new Video("bbb", "bbb", "bbb")
        ]
    }
}

