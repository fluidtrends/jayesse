export default (chunks: any): any[] => {
    let routes: any[] = []

    for(let chunkName in chunks) {
      const chunk = chunks[chunkName]

      if (!chunk || !chunk.screens || !chunk.routes) return []


      for(let routeName in chunk.routes) {
        const route = chunk.routes[routeName]
        const component = chunk.screens[route.screen]

        component && routes.push(Object.assign({}, route, { component }))
      }
  
    }
    return routes
  }