export interface ChunkProps {
    name: string
    config?: any
    screens?: React.FC[]
}

export interface AppProps {
    name: string
    config?: any
    chunks: ChunkProps[]
}

export interface NavigatorProps {
    
}