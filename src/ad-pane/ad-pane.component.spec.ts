/* tslint:disable:no-unused-variable */
import {
    async,
    ComponentFixture,
    TestBed
} from '@angular/core/testing';
import { AdPaneComponent } from './ad-pane.component';

describe('AdPaneComponent', () => {
    let component: AdPaneComponent;
    let fixture: ComponentFixture<AdPaneComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AdPaneComponent
            ]
        });
        TestBed.compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AdPaneComponent);
        component = fixture.componentInstance;
    });

    it('should create the ad-pane', () => {
        expect(component).toBeTruthy();
    });
});
