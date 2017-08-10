/* tslint:disable:no-unused-vars */
import { Component } from '@angular/core';
import {
    getTestBed,
    TestBed
} from '@angular/core/testing';

import { ComponentService } from './component.service';
import { ComponentRegistryService } from './component-registry.service';

@Component({
    selector: 'faux-cmp',
    template: ''
})
class FauxComponent {}

describe('ComponentRegistryService', () => {
    let componentSpy: ComponentService;
    let service: ComponentRegistryService;

    beforeEach(() => {
        componentSpy = jasmine.createSpyObj('ComponentService', ['register']);

        TestBed.configureTestingModule({
            providers: [
                { provide: ComponentService, useValue: componentSpy },
                ComponentRegistryService
            ]
        });
        service = getTestBed().get(ComponentRegistryService);
    });

    it('', () => {
        expect(service).toBeTruthy();
    });

    it('#register should call ComponentService.register', () => {
        const registration = {
            component: FauxComponent,
            id: 'faux-cmp'
        };

        service.register(registration);
        expect(componentSpy.register).toHaveBeenCalledWith(registration);
    });

    it('#bulkRegister should call ComponentService.register for each registration', () => {
        const registrations = [
            {
                component: FauxComponent,
                id: 'faux-cmp'
            },
            {
                component: FauxComponent,
                id: 'faux-cmp2'
            },
            {
                component: FauxComponent,
                id: 'faux-cmp3'
            }
        ];

        service.bulkRegister(registrations);
        expect(componentSpy.register).toHaveBeenCalledTimes(3);
        expect(componentSpy.register).toHaveBeenCalledWith(registrations[0]);
        expect(componentSpy.register).toHaveBeenCalledWith(registrations[1]);
        expect(componentSpy.register).toHaveBeenCalledWith(registrations[2]);
    });
});
