import {
    Component,
    EventEmitter,
    Input,
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
export class AdLayoutComponent {
    @Input('data') data: any;
    @Input('layout') layout: DashboardLayout;
    @Output('dashboardEvent') dashboardEvent = new EventEmitter<DashboardEvent>();

    constructor() {}

    onDashboardEvent(event: DashboardEvent) {
        this.dashboardEvent.emit(event);
    }
}
