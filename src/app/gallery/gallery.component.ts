import { Component, OnInit } from '@angular/core';
import { Gallery } from '../models/gallery';
import { AppService } from '../services/app.service';


@Component({
    selector: 'gallery',
    templateUrl: './gallery.component.html'
})
export class GalleryComponent implements OnInit {
    public galleries: Array<Gallery> = new Array<Gallery>();

    constructor(private appService: AppService) {}

    ngOnInit() {
        this.appService.getGalleries().subscribe((data: Array<Gallery>) => this.galleries = data);
    }
}