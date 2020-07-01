import { CoverProps, HeaderProps } from './components';
export interface MainProps {
    route: any;
    cover?: CoverProps;
    header?: HeaderProps;
    [key: string]: any;
}
export interface InfoProps {
    title: string;
    subtitle: string;
}
