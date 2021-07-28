export declare const renderComponent: (component: any, i: number, route: any, session: any) => any;
export declare const renderApp: (isStatic?: boolean) => {
    app: JSX.Element;
    props: any;
    locale: any;
    assets: {
        image: (id: string) => string;
        images: any;
        cover: (id: string) => string;
        covers: any;
        strings: any;
        string: (id: string) => any;
        text: (id: string) => any;
        authors: any;
        posts: any;
        post: (id: string) => any;
    };
};
