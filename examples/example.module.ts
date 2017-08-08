import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ExampleComponent } from './example.component';
import { AngularDashboardModule } from '../index';

@NgModule({
    declarations: [
        ExampleComponent
    ],
    imports: [
        BrowserModule,
        AngularDashboardModule
    ],
    providers: [],
    bootstrap: [ExampleComponent]
})
export class ExampleModule { }
