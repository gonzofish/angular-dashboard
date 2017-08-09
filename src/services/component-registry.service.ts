import { Injectable } from '@angular/core';

import { ComponentService } from './component.service';
import { ComponentRegistration } from '../interfaces/component-registration.interface';

@Injectable()
export class ComponentRegistryService {
    constructor(private _componentService: ComponentService) {}

    bulkRegister(components: Array<ComponentRegistration>) {
        components.forEach((component) => this.register(component));
    }

    register(component: ComponentRegistration) {
        this._componentService.register(component);
    }
}
