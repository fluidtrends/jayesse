import { 
    CoverProps, 
    HeaderProps
} from './components'

export interface ContainerProps {
    route: any
    assets: any
    cover?: CoverProps
    header?: HeaderProps
    [key: string]: any
}

export interface MainProps extends ContainerProps {
    
}

export interface InfoProps extends ContainerProps  {
    title: string 
    subtitle: string
}
