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
    current: string;
    cover?: CoverProps;
    action?: ActionProps;
}
export interface DocumentProps extends ComponentProps {
    repo: string;
    root: string;
}
export interface ArticleProps extends ComponentProps {
    source: string;
}
export interface SlideProps extends ComponentProps {
    text: string;
    image: string;
    imageFirst: boolean;
}
export interface SlideSetProps extends ComponentProps {
    slides: SlideProps[];
}
export interface MenuProps extends ComponentProps {
    items: MenuItemProps[];
    onSelect?: any;
    selected: string;
}
