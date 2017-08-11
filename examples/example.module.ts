import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {
    AngularDashboardModule,
    AdPaneBodyComponent,
    AdPaneTitleComponent
} from '../index';

import { ExampleComponent } from './example.component';
import { ExCmpComponent } from './ex-cmp/ex-cmp.component';

@NgModule({
    declarations: [
        AdPaneBodyComponent,
        AdPaneTitleComponent,
        ExampleComponent,
        ExCmpComponent
    ],
    imports: [
        BrowserModule,
        AngularDashboardModule.withComponents([
            ExCmpComponent
        ])
    ],
    providers: [],
    bootstrap: [ExampleComponent]
})
export class ExampleModule { }
