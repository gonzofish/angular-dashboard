import { CommonModule } from '@angular/common';
import {
    ANALYZE_FOR_ENTRY_COMPONENTS,
    ModuleWithProviders,
    NgModule
} from '@angular/core';

import { AdContainerComponent } from './ad-container/ad-container.component';
import { AdDashboardComponent } from './ad-dashboard/ad-dashboard.component';
import { AdPaneComponent } from './ad-pane/ad-pane.component';

import { ComponentService } from './services/component.service';
import { ComponentRegistryService } from './services/component-registry.service';
import { SetupService } from './services/setup.service';

@NgModule({
    declarations: [
        AdPaneComponent,
        AdDashboardComponent,
        AdPaneComponent
    ],
    exports: [
        AdDashboardComponent
    ],
    imports: [
        CommonModule
    ],
    providers: [
        ComponentService,
        SetupService
    ]
})
export class AngularDashboardModule {
    static withComponents(components: any): ModuleWithProviders {
        return {
            ngModule: AngularDashboardModule,
            providers: [
                ComponentRegistryService,
                {
                    multi: true,
                    provide: ANALYZE_FOR_ENTRY_COMPONENTS,
                    useValue: components
                }
            ]
        };
    }

    static forRoot() {
        return {
            ngModule: AngularDashboardModule,
            providers: [
                ComponentRegistryService
            ]
        };
    }
}
