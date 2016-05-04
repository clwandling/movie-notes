/**
 * Created by cory on 5/3/2016.
 */
import {Component} from '@angular/core';
import {Video} from './video';

@Component({
    selector: 'video-list',
    templateUrl: 'app/video-list.component.html',
    inputs: ['videos']
})
export class VideoListComponent {
    videoSelected(video:Video) {
        console.log(video);
    }
}