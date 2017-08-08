import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [

    ],
    exports: [

    ],
    imports: [
        CommonModule
    ]
})
export class AngularDashboardModule {
    static forRoot() {
        return {
            ngModule: AngularDashboardModule,
            providers: []
        };
    }
}
