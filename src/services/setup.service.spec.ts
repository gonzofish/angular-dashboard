/* tslint:disable:no-unused-vars */
import {
    getTestBed,
    TestBed
} from '@angular/core/testing';

import { ComponentService } from './component.service';
import { SetupService } from './setup.service';

describe('SetupService', () => {
    let service: SetupService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                ComponentService,
                SetupService
            ]
        });
        service = getTestBed().get(SetupService);
    });

    it('', () => {
        expect(service).toBeTruthy();
    });
});
