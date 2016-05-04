/**
 * Created by cory on 5/4/2016.
 */
import {Component, Input} from '@angular/core';
import {Video} from './video';

@Component({
    selector: 'video-details',
    template: '<h3>{{video.name}}</h3>'
})
export class VideoDetailsComponent {
    @Input() video : Video;
}