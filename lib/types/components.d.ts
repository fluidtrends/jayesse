import { ActionProps } from './main';
import { ContainerProps } from './containers';
export interface ComponentProps extends ContainerProps {
}
export interface MenuItemProps extends ComponentProps {
    name: string;
    path?: string;
    file?: string;
    id: string;
    url?: string;
    items?: MenuItemProps[];
}
export interface CoverProps extends ComponentProps {
    title: string;
    subtitle: string;
    action: ActionProps;
}
export interface HeaderProps extends ComponentProps {
    items: MenuItemProps[];
    inverted: boolean;
    current: string;
    cover?: CoverProps;
    action?: ActionProps;
}
export interface TextProps extends ComponentProps {
    source?: string;
}
export interface DocumentProps extends ComponentProps {
    repo: string;
    root: string;
}
export interface MenuProps extends ComponentProps {
    items: MenuItemProps[];
    onSelect?: any;
    selected: string;
}
