/* tslint:disable:no-unused-vars */
import {
    getTestBed,
    TestBed
} from '@angular/core/testing';

import { ComponentService } from './component.service';

describe('ComponentService', () => {
    let service: ComponentService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ComponentService]
        });
        service = getTestBed().get(ComponentService);
    });

    it('', () => {
        expect(service).toBeTruthy();
    });
});
