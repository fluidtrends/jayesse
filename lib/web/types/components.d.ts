import { ActionProps } from './main';
export interface MenuItemProps {
    name: string;
    path: string;
    id: string;
}
export interface CoverProps {
    title: string;
    subtitle: string;
    action: ActionProps;
}
export interface HeaderProps {
    items: MenuItemProps[];
    inverted: boolean;
    current: string;
    cover?: CoverProps;
    action?: ActionProps;
}
export interface TextProps {
    source?: string;
}
export interface DocumentProps {
}
export interface SideMenuProps {
}
