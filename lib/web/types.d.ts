/// <reference types="react" />
export interface ChunkProps {
    name: string;
    config?: any;
    screens?: Map<string, React.FC>;
}
export interface AppProps {
    name: string;
    config?: any;
    chunks: Map<string, ChunkProps>;
}
export interface NavigatorProps {
}
