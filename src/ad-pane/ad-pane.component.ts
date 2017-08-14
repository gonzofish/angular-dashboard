import {
    AfterContentInit,
    Component,
    ContentChild,
    Input
} from '@angular/core';

@Component({
    selector: 'ad-pane',
    styleUrls: ['./ad-pane.component.scss'],
    templateUrl: './ad-pane.component.html'
})
export class AdPaneComponent implements AfterContentInit {
    // @ContentChild('.pane-title') paneTitle: any;
    @Input('title') title: string;
    showTitle = false;

    constructor() {}

    ngAfterContentInit() {
        this.showTitle = !!this.title;
    }
}
