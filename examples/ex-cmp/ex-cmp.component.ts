import {
    Component,
    Input
} from '@angular/core';

@Component({
    selector: 'ex-cmp',
    styleUrls: ['./ex-cmp.component.scss'],
    templateUrl: './ex-cmp.component.html'
})
export class ExCmpComponent {
    @Input('store') store: any;
    @Input('title') title: string;

    constructor() {}

}
