export interface ScreenProps {
    route: any
    [key: string]: any
}

export interface GuideStep {
    message: string
    action: string
    onAction: number
    id: string
}

export interface NotFoundProps {
    title: string 
    subtitle: string
}

export interface CoverProps {
    title: string 
    subtitle: string
}

export interface HeaderProps {
    items: MenuItemProps[]
    inverted: boolean
    current: string
    cover: CoverProps
}

export interface MenuItemProps {
    name: string
    path: string
    id: string
}

export interface GuideProps {
    steps: GuideStep[]
}

export interface AppProps {
    name: string
    chunks: any
    routes: any[]
    notfound: NotFoundProps
    [key: string]: any
}

export interface NavigatorProps {
    routes: any[]
    notfound: NotFoundProps
}