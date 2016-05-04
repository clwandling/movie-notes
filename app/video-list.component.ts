/**
 * Created by cory on 5/3/2016.
 */
import {Component, Input, EventEmitter, Output} from '@angular/core';
import {Video} from './video';

@Component({
    selector: 'video-list',
    templateUrl: 'app/video-list.component.html',
})
export class VideoListComponent {

    @Input() videos;
    @Output() videoSelected = new EventEmitter();

    videoClicked(video: Video) {
        this.videoSelected.emit(video);
    }
}
