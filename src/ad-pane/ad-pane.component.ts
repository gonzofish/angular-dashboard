import {
    Component,
    ComponentFactoryResolver,
    EventEmitter,
    Input,
    AfterViewInit,
    Output,
    ViewChild
} from '@angular/core';

import {
    DashboardEvent,
    DashboardPane
} from '../interfaces';
import { AdComponentDirective } from '../directives/ad-component.directive';
import { ComponentService } from '../services/component.service';

@Component({
    selector: 'ad-pane',
    styleUrls: ['./ad-pane.component.scss'],
    templateUrl: './ad-pane.component.html'
})
export class AdPaneComponent implements AfterViewInit {
    @Input('data') data: any;
    @Input('pane') pane: DashboardPane;
    @Output('dashboardEvent') dashboardEvent = new EventEmitter<DashboardEvent>();
    @ViewChild(AdComponentDirective) adComponent: AdComponentDirective;

    constructor(
        private _componentResolver: ComponentFactoryResolver,
        private _componentService: ComponentService
    ) {}

    ngAfterViewInit() {
        const { component, outputs, inputs } = this.pane;
        const containerRef = this.adComponent.viewContainerRef;
        const registration = this._componentService.select(this.pane.component);
        const factory = this._componentResolver
            .resolveComponentFactory(registration.component);
        let componentRef;

        containerRef.clear();
        componentRef = containerRef.createComponent(factory);

        (inputs || []).forEach((input) => {
            componentRef[input.attribute] = this._pickData(input.dataAttribute);
        });

        (outputs || []).forEach((output) => {
            componentRef[output] = (data: any) =>
                this._onComponentEvent(output, data);
        });
    }

    private _pickData(dataAttribute: string) {
        const attributes = dataAttribute.split('.');

        return attributes.reduce((data, attribute) => {
            return data[attribute];
        }, this.data);
    }

    private _onComponentEvent(event: string, data: any) {
        this.dashboardEvent.emit({
            componentId: this.pane.component,
            eventName:  event,
            data
        });
    }
}
