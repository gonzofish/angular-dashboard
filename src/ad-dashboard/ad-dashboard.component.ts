import {
    Component,
    EventEmitter,
    Input,
    OnChanges,
    Output,
    SimpleChanges
} from '@angular/core';

import { DashboardEvent } from '../interfaces/dashboard-event.interface';
import { DashboardLayout } from '../interfaces/dashboard-layout.interface';

@Component({
    selector: 'ad-dashboard',
    styleUrls: ['./ad-dashboard.component.scss'],
    templateUrl: './ad-dashboard.component.html'
})
export class AdDashboardComponent implements OnChanges {
    @Input('data') data: any;
    @Input('setup') setup: DashboardLayout;
    @Output('dashboardEvent') dashboardEvent = new EventEmitter<DashboardEvent>();

    constructor() {}

    ngOnChanges(changes: SimpleChanges) {

    }
}
