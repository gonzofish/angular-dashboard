/* tslint:disable:no-unused-variable */
import {
    async,
    ComponentFixture,
    TestBed
} from '@angular/core/testing';
import { AdPaneTitleComponent } from './ad-pane-title.component';

describe('AdPaneTitleComponent', () => {
    let component: AdPaneTitleComponent;
    let fixture: ComponentFixture<AdPaneTitleComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AdPaneTitleComponent
            ]
        });
        TestBed.compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AdPaneTitleComponent);
        component = fixture.componentInstance;
    });

    it('should create the ad-pane-title', () => {
        expect(component).toBeTruthy();
    });
});
