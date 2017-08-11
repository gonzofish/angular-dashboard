/* tslint:disable:no-unused-variable */
import {
    async,
    ComponentFixture,
    TestBed
} from '@angular/core/testing';
import { AdLayoutComponent } from './ad-layout.component';

describe('AdLayoutComponent', () => {
    let component: AdLayoutComponent;
    let fixture: ComponentFixture<AdLayoutComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AdLayoutComponent
            ]
        });
        TestBed.compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AdLayoutComponent);
        component = fixture.componentInstance;
    });

    it('should create the ad-layout', () => {
        expect(component).toBeTruthy();
    });
});
