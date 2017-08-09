/* tslint:disable:no-unused-variable */
import {
    async,
    ComponentFixture,
    TestBed
} from '@angular/core/testing';
import { AdContainerComponent } from './ad-container.component';

describe('AdContainerComponent', () => {
    let component: AdContainerComponent;
    let fixture: ComponentFixture<AdContainerComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AdContainerComponent
            ]
        });
        TestBed.compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AdContainerComponent);
        component = fixture.componentInstance;
    });

    it('should create the ad-container', () => {
        expect(component).toBeTruthy();
    });
});
