import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'nav-bar',
    templateUrl: './navbar.component.html'
})
export class NavBarComponent {
    @Input() isMobile: boolean = false;
    @Output() showSideNav: EventEmitter<void> = new EventEmitter();

    public showSideNavToggle(): void {
        this.showSideNav.emit();
    }
}