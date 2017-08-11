/* tslint:disable:no-unused-variable */
import {
    async,
    ComponentFixture,
    TestBed
} from '@angular/core/testing';
import { ExCmpComponent } from './ex-cmp.component';

describe('ExCmpComponent', () => {
    let component: ExCmpComponent;
    let fixture: ComponentFixture<ExCmpComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                ExCmpComponent
            ]
        });
        TestBed.compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ExCmpComponent);
        component = fixture.componentInstance;
    });

    it('should create the ex-cmp', () => {
        expect(component).toBeTruthy();
    });
});
