import {
    Directive,
    ViewContainerRef
} from '@angular/core';

@Directive({
    selector: '[adComponent]'
})
export class AdComponentDirective {
    constructor(
        public viewContainerRef: ViewContainerRef
    ) {}
}
