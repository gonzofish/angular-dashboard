/* tslint:disable:no-unused-vars */
import {
    getTestBed,
    TestBed
} from '@angular/core/testing';

import { ComponentRegistryService } from './component-registry.service';

describe('ComponentRegistryService', () => {
    let service: ComponentRegistryService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ComponentRegistryService]
        });
        service = getTestBed().get(ComponentRegistryService);
    });

    it('', () => {
        expect(service).toBeTruthy();
    });
});
