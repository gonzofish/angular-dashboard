import {
    Component,
    EventEmitter,
    Input,
    OnChanges,
    Output,
    SimpleChanges
} from '@angular/core';

import { DashboardEvent } from '../interfaces/dashboard-event.interface';
import { SetupService } from '../services/setup.service';

@Component({
    selector: 'ad-dashboard',
    styleUrls: ['./ad-dashboard.component.scss'],
    templateUrl: './ad-dashboard.component.html'
})
export class AdDashboardComponent implements OnChanges {
    @Input('data') data: any;
    @Input('setup') setup: any;
    @Output('dashboardEvent') dashboardEvent = new EventEmitter<DashboardEvent>();

    constructor(private _setupService: SetupService) {}

    ngOnChanges(changes: SimpleChanges) {

    }
}
