import { NotFoundProps } from './containers';
export interface GuideStep {
    message: string;
    action: string;
    onAction: number;
    id: string;
}
export interface ActionProps {
    title: string;
    link?: string;
    icon?: string;
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
