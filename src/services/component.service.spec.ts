/* tslint:disable:no-unused-vars */
import { Component } from '@angular/core';
import {
    getTestBed,
    TestBed
} from '@angular/core/testing';

import { ComponentService } from './component.service';

@Component({
    selector: 'faux-cmp',
    template: ''
})
class FauxComponent { }

describe('ComponentService', () => {
    let getSpy: jasmine.Spy;
    let hasSpy: jasmine.Spy;
    let mapSpy;
    let realMap: any;
    let service: ComponentService;
    let setSpy: jasmine.Spy;

    beforeEach(() => {
        realMap = window['Map'];
        mapSpy = spyOn(window, 'Map').and.callFake(function() {
            const map = new realMap();

            getSpy = spyOn(map, 'get').and.callThrough();
            hasSpy = spyOn(map, 'has').and.callThrough();
            setSpy = spyOn(map, 'set').and.callThrough();

            return map;
        });

        // getSpy = jasmine.createSpy('Map.get');
        // hasSpy = jasmine.createSpy('Map.has');
        // setSpy = jasmine.createSpy('Map.set');

        // realMap = {
        //     get: Map.prototype.get,
        //     has: Map.prototype.has,
        //     set: Map.prototype.set
        // };

        // getSpy.and.callFake(realMap.get);
        // hasSpy.and.callFake(realMap.has);
        // setSpy.and.callFake(realMap.set);

        // Map.prototype.get = getSpy;
        // Map.prototype.has = hasSpy;
        // Map.prototype.set = setSpy;

        TestBed.configureTestingModule({
            providers: [ComponentService]
        });
        service = getTestBed().get(ComponentService);
    });

    afterEach(() => {
        // Map.prototype.get = realMap.get;
        // Map.prototype.has = realMap.has;
        // Map.prototype.set = realMap.set;
        window['Map'] = realMap;
    });

    it('', () => {
        expect(service).toBeTruthy();
    });

    describe('#register', () => {
        const registration = {
            component: FauxComponent,
            id: 'faux-cmp'
        };

        it('should call _components.has', () => {
            service.register(registration);
            expect(hasSpy).toHaveBeenCalledWith('faux-cmp');
        });

        it('should add a registration with a new ID', () => {
            service.register(registration);
            expect(setSpy).toHaveBeenCalledWith('faux-cmp', registration);
        });

        it('should NOT add a registration that already exists', () => {
            service.register(registration);
            service.register(registration);

            expect(hasSpy).toHaveBeenCalledTimes(2);
            expect(setSpy).toHaveBeenCalledTimes(1);
        });
    });

    it('#select should return a known registration', () => {
        const registration = {
            component: FauxComponent,
            id: 'faux-cmp'
        };

        service.register(registration);

        expect(service.select('faux-cmp')).toEqual(registration);
        expect(service.select('unknown')).toBeUndefined();
    });
});
