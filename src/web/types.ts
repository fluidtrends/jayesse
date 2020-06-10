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
    routes: any
    [key: string]: any
}

export interface NavigatorProps {
    [key: string]: any
}