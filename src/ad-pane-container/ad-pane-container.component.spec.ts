/* tslint:disable:no-unused-variable */
import {
    async,
    ComponentFixture,
    TestBed
} from '@angular/core/testing';
import { AdPaneContainerComponent } from './ad-pane-container.component';

describe('AdPaneContainerComponent', () => {
    let component: AdPaneContainerComponent;
    let fixture: ComponentFixture<AdPaneContainerComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AdPaneContainerComponent
            ]
        });
        TestBed.compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AdPaneContainerComponent);
        component = fixture.componentInstance;
    });

    it('should create the ad-pane', () => {
        expect(component).toBeTruthy();
    });
});
