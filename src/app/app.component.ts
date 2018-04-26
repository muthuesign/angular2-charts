import { Component, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    @ViewChild('sidenav') sidenav: any;
    public mobileQuery: MediaQueryList;

    private _mobileQueryListener: () => void;

    constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this._mobileQueryListener);
    }

    public showSideNav() {
        if (this.sidenav){
            this.sidenav.toggle();
        }
    }

    ngOnDestroy(): void {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    }
}
