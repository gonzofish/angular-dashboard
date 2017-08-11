/* tslint:disable:no-unused-variable */
import {
    async,
    ComponentFixture,
    TestBed
} from '@angular/core/testing';
import { AdPaneBodyComponent } from './ad-pane-body.component';

describe('AdPaneBodyComponent', () => {
    let component: AdPaneBodyComponent;
    let fixture: ComponentFixture<AdPaneBodyComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AdPaneBodyComponent
            ]
        });
        TestBed.compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AdPaneBodyComponent);
        component = fixture.componentInstance;
    });

    it('should create the ad-pane-body', () => {
        expect(component).toBeTruthy();
    });
});
