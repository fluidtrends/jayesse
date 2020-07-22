export interface ScreenProps {
    route: any;
    cover?: CoverProps;
    header?: HeaderProps;
    [key: string]: any;
}
export interface GuideStep {
    message: string;
    action: string;
    onAction: number;
    id: string;
}
export interface NotFoundProps {
    title: string;
    subtitle: string;
}
export interface ActionProps {
    title: string;
    link?: string;
    icon?: string;
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
export interface MenuItemProps {
    name: string;
    path: string;
    id: string;
}
export interface GuideProps {
    steps: GuideStep[];
}
export interface AppProps {
    name: string;
    chunks: any;
    routes: any[];
    notfound: NotFoundProps;
    [key: string]: any;
}
export interface NavigatorProps {
    routes: any[];
    notfound: NotFoundProps;
}
