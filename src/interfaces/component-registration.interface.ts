import { AdInput } from './ad-input.interface';

export interface ComponentRegistration {
    component: any;
    id: string;
    inputs?: Array<AdInput>;
    outputs?: Array<string>;
}
