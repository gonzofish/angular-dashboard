import { AdInput } from './ad-input.interface';

export interface DashboardLayout {
    layout: LayoutOrientation;
    panes: Array<DashboardLayout|DashboardPane>;
}

export enum LayoutOrientation {
    ROWS,
    COLUMNS
};

export interface DashboardPane {
    component: string;
    inputs?: Array<AdInput>;
    outputs?: Array<string>;
    size?: string;
    title?: string;
}
