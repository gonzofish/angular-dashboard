import { Injectable } from '@angular/core';

import { ComponentService } from './component.service';

@Injectable()
export class SetupService {
    constructor(private _componentService: ComponentService) {}
}
