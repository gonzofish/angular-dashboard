import {
    Component,
    EventEmitter,
    HostBinding,
    Input,
    OnInit,
    Output
} from '@angular/core';

import {
    DashboardEvent,
    DashboardLayout,
    DashboardPane,
    LayoutOrientation
} from '../interfaces';

@Component({
    selector: 'ad-layout',
    styleUrls: ['./ad-layout.component.scss'],
    templateUrl: './ad-layout.component.html'
})
export class AdLayoutComponent implements OnInit {
    @HostBinding('style.flexDirection') flexDirection: string;
    @Input('data') data: any;
    @Input('layout') layout: DashboardLayout;
    @Output('dashboardEvent') dashboardEvent = new EventEmitter<DashboardEvent>();

    constructor() {}

    ngOnInit() {
        this.flexDirection = this._setFlexDirection(this.layout.layout);
    }

    private _setFlexDirection(layout: LayoutOrientation): string {
        switch (layout) {
            case LayoutOrientation.COLUMNS:
                return 'row';
            default:
                return 'column';
        }
    }

    onDashboardEvent(event: DashboardEvent) {
        this.dashboardEvent.emit(event);
    }
}
