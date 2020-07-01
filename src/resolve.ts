import { withRouter } from 'react-router-dom'

export default (target: string) => {
    const config: any = require('.carmel.json')
    let chunks: any = {}
    let routes: any = []

    config.chunks.map((chunkId: string) => {        
        const chunkConfig = require(`carmel/chunks/${chunkId}/chunk.json`)

        let chunkRoutes = chunkConfig.routes || []
        chunkRoutes = chunkRoutes.map((route: any) => Object.assign({}, route, {
            chunk: chunkId,
            id: `${chunkId}/${route.id}`,
            resolvedPath: route.variant ? `${route.path}(/:${route.variant})*` : route.path,
            component: withRouter(require(`carmel/chunks/${chunkId}/screens/${route.screen}/${target}`).default)
        }))
        
        routes = routes.concat(chunkRoutes)

        const chunk = { id: chunkId, ...chunkConfig, routes: chunkRoutes }
        chunks[chunkId] = chunk
    })

    return { ...config, chunks, routes }
}