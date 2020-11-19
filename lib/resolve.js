"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChunkComponent = exports.ChunkManifest = void 0;
const react_router_dom_1 = require("react-router-dom");
exports.ChunkManifest = (chunk) => {
    try {
        return require(`carmel/chunks/${chunk}/chunk.json`);
    }
    catch (_a) { }
};
exports.ChunkComponent = (chunk, id, target = 'web') => {
    try {
        const componentFile = `${id}${target === 'web' ? '' : '.' + target}`;
        const component = react_router_dom_1.withRouter(require(`carmel/chunks/${chunk}/components/${componentFile}`));
        return component.default;
    }
    catch (_a) {
    }
};
exports.default = (target) => {
    const config = require('.carmel.json');
    let chunks = {};
    let routes = [];
    config.chunks.map((chunkId) => {
        const chunkConfig = exports.ChunkManifest(chunkId);
        let chunkRoutes = chunkConfig.routes || [];
        let chunkComponents = {};
        chunkRoutes = chunkRoutes.map((route) => {
            const path = `${chunkConfig.path}${route.path.substring(1)}`;
            let components = [];
            route.components.map((component) => {
                const componentId = (typeof component === 'string' ? component : component.id);
                chunkComponents[componentId] = chunkComponents[componentId] || exports.ChunkComponent(chunkId, componentId, target);
                components.push(chunkComponents[componentId] || component);
            });
            return Object.assign({}, route, {
                chunk: chunkId,
                path,
                id: `${chunkId}/${route.id}`,
                resolvedPath: route.variant ? `${path}(/:${route.variant})*` : path,
                components
            });
        });
        routes = routes.concat(chunkRoutes);
        const chunk = Object.assign(Object.assign({ id: chunkId }, chunkConfig), { routes: chunkRoutes, components: chunkComponents });
        chunks[chunkId] = chunk;
    });
    return Object.assign(Object.assign({}, config), { chunks, routes });
};
//# sourceMappingURL=resolve.js.map