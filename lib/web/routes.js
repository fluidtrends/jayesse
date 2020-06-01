"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (chunks) {
    var routes = [];
    for (var chunkName in chunks) {
        var chunk = chunks[chunkName];
        if (!chunk || !chunk.screens || !chunk.routes)
            return [];
        for (var routeName in chunk.routes) {
            var route = chunk.routes[routeName];
            var component = chunk.screens[route.screen];
            component && routes.push(Object.assign({}, route, { component: component }));
        }
    }
    return routes;
});
//# sourceMappingURL=routes.js.map