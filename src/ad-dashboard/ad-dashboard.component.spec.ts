/* tslint:disable:no-unused-variable */
import {
    async,
    ComponentFixture,
    TestBed
} from '@angular/core/testing';
import { AdDashboardComponent } from './ad-dashboard.component';

describe('AdDashboardComponent', () => {
    let component: AdDashboardComponent;
    let fixture: ComponentFixture<AdDashboardComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AdDashboardComponent
            ]
        });
        TestBed.compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AdDashboardComponent);
        component = fixture.componentInstance;
    });

    it('should create the ad-dashboard', () => {
        expect(component).toBeTruthy();
    });
});
