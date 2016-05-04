import {Component} from '@angular/core';
import {Video} from './video';
import {VideoListComponent} from './video-list.component';
import {VideoDetailsComponent} from './video-details.component';

@Component({
    selector: 'my-app',
    template: `
                <h1 class="jumbotron">{{title}}</h1>
                <video-list [videos]="videos" (videoSelected)="videoSelected($event)"></video-list>
                <video-details *ngIf="selectedVideo" [video]="selectedVideo"></video-details>
               `,
    directives: [VideoListComponent, VideoDetailsComponent]
})
export class AppComponent {
    title : string = "Movie Notes";
    videos : Array<Video>;
    selectedVideo : Video;

    constructor() {
        this.videos = [
            new Video("aaa", "aaa", "aaa"),
            new Video("bbb", "bbb", "bbb")
        ]
    }

    videoSelected(video : Video) {
        console.log(video);
        this.selectedVideo = video;
    }
}
