import 'react'

declare module 'react' {
    interface StyleHTMLAttributes<T> extends React.HTMLAttributes<T> {
        jsx?: boolean;
        global?: boolean;
    }
}

export interface Viewport {
    isSmall: boolean
    width: number
    isPortrait: boolean
    scale: number
    height: number
}

export interface GuideStep {
    message: string
    action: string
    onAction: number
    id: string
}

export interface ActionProps {
    title: string 
    link?: string
    icon?: string
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