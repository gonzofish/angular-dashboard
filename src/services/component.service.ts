import { Injectable } from '@angular/core';

import { ComponentRegistration } from './../interfaces/component-registration.interface';

@Injectable()
export class ComponentService {
    private _components = new Map<string, ComponentRegistration>();
    constructor() {}

    register(component: ComponentRegistration) {
        if (!this._components.has(component.id)) {
            this._components.set(component.id, component);
        }
    }

    select(id: string): ComponentRegistration {
        return this._components.get(id);
    }
}
