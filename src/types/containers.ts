import { 
    CoverProps, 
    HeaderProps
} from './components'

import {
    Viewport
} from './main'

export interface ContainerProps {
    route: any
    assets: any
    viewport: Viewport
    cover?: CoverProps
    header?: HeaderProps
    [key: string]: any
}