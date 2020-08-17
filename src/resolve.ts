import { withRouter } from 'react-router-dom'

export const ChunkManifest = (chunk: string) => {
    try {
        return require(`carmel/chunks/${chunk}/chunk.json`)
    } catch {}
} 

export const ChunkComponent = (chunk: string, id: string, target: string = 'web') => {
    try {
        const componentFile = `${id}${target === 'web' ? '' : '.' + target}`
        const component: any = withRouter(require(`carmel/chunks/${chunk}/components/${componentFile}`))
        return component.default
    } catch {
    }
}

export default (target: string) => {
    const config: any = require('.carmel.json')

    let chunks: any = {}
    let routes: any = []

    config.chunks.map((chunkId: string) => {        
        const chunkConfig = ChunkManifest(chunkId)
        let chunkRoutes = chunkConfig.routes || []
        let chunkComponents: any = {}

        chunkRoutes = chunkRoutes.map((route: any) => {
            const path = `${chunkConfig.path}${route.path.substring(1)}`
            let components: any = []

            route.components.map((component: any) => {
                const componentId = (typeof component === 'string' ? component : component.id)
                chunkComponents[componentId] = chunkComponents[componentId] || ChunkComponent(chunkId, componentId, target)
                components.push(chunkComponents[componentId] || component)
            })

            return Object.assign({}, route, {
                chunk: chunkId,
                path,
                id: `${chunkId}/${route.id}`,
                resolvedPath: route.variant ? `${path}(/:${route.variant})*` : path,
                components
            })
        })
        
        routes = routes.concat(chunkRoutes)

        const chunk = { id: chunkId, ...chunkConfig, routes: chunkRoutes, components: chunkComponents }
        chunks[chunkId] = chunk
    })

    return { ...config, chunks, routes }
}