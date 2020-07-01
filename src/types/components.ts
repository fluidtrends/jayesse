import { ActionProps } from './main'

export interface MenuItemProps {
    name: string
    path?: string
    file?: string
    id: string
    url?: string
    items?: MenuItemProps[]
}

export interface CoverProps {
    title: string 
    subtitle: string
    action: ActionProps
}

export interface HeaderProps {
    items: MenuItemProps[]
    inverted: boolean
    current: string
    cover?: CoverProps
    action?: ActionProps
}

export interface TextProps {
    source?: string
}

export interface DocumentProps {
    repo: string
    root: string
}

export interface MenuProps {
    items: MenuItemProps[],
    onSelect?: any
    selected: string
}


