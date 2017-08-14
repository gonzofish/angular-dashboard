import { Component } from '@angular/core';

import {
    ComponentRegistration,
    ComponentRegistryService,
    DashboardLayout,
    DashboardPane,
    LayoutOrientation
} from '../index';

import { ExCmpComponent } from './ex-cmp/ex-cmp.component';

@Component({
    selector: 'example-root',
    templateUrl: './example.component.html',
    styleUrls: []
})
export class ExampleComponent {
    data = {
        restaurants: [
            {
                id: 1,
                name: 'Bigger Burgers',
                type: 'hamburger'
            },
            {
                id: 12,
                name: `Joe's Pitzeria`,
                type: 'pizza'
            }
        ]
    };
    setup = {
        layout: LayoutOrientation.COLUMNS,
        panes: [
            {
                component: 'ex-cmp',
                size: '25%',
                title: 'Tall Joe'
            },
            {
                layout: LayoutOrientation.ROWS,
                panes: [
                    {
                        layout: LayoutOrientation.COLUMNS,
                        panes: [
                            {
                                component: 'ex-cmp',
                                inputs: {
                                    attribute: 'store',
                                    dataAttribute: 'restaurants.0.name'
                                }
                            },
                            {
                                component: 'ex-cmp',
                                inputs: {
                                    attribute: 'store',
                                    dataAttribute: ''
                                }
                            }
                        ]
                    },
                    {
                        component: 'ex-cmp',
                        title: 'Short Joe'
                    }
                ]
            }
        ]
    };

    constructor(private _registryService: ComponentRegistryService) {
        _registryService.bulkRegister(
            [
                {
                    component: ExCmpComponent,
                    id: 'ex-cmp',
                    inputs: [
                        {
                            attribute: 'store',
                            dataAttribute: 'restaurants.1'
                        }
                    ]
                }
            ]
        );
    }
}
