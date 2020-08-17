"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChunkComponent = exports.ChunkManifest = void 0;
var react_router_dom_1 = require("react-router-dom");
exports.ChunkManifest = function (chunk) {
    try {
        return require("carmel/chunks/" + chunk + "/chunk.json");
    }
    catch (_a) { }
};
exports.ChunkComponent = function (chunk, id, target) {
    if (target === void 0) { target = 'web'; }
    try {
        var componentFile = "" + id + (target === 'web' ? '' : '.' + target);
        var component = react_router_dom_1.withRouter(require("carmel/chunks/" + chunk + "/components/" + componentFile));
        return component.default;
    }
    catch (_a) {
    }
};
exports.default = (function (target) {
    var config = require('.carmel.json');
    var chunks = {};
    var routes = [];
    config.chunks.map(function (chunkId) {
        var chunkConfig = exports.ChunkManifest(chunkId);
        var chunkRoutes = chunkConfig.routes || [];
        var chunkComponents = {};
        chunkRoutes = chunkRoutes.map(function (route) {
            var path = "" + chunkConfig.path + route.path.substring(1);
            var components = [];
            route.components.map(function (component) {
                var componentId = (typeof component === 'string' ? component : component.id);
                chunkComponents[componentId] = chunkComponents[componentId] || exports.ChunkComponent(chunkId, componentId, target);
                components.push(chunkComponents[componentId] || component);
            });
            return Object.assign({}, route, {
                chunk: chunkId,
                path: path,
                id: chunkId + "/" + route.id,
                resolvedPath: route.variant ? path + "(/:" + route.variant + ")*" : path,
                components: components
            });
        });
        routes = routes.concat(chunkRoutes);
        var chunk = __assign(__assign({ id: chunkId }, chunkConfig), { routes: chunkRoutes, components: chunkComponents });
        chunks[chunkId] = chunk;
    });
    return __assign(__assign({}, config), { chunks: chunks, routes: routes });
});
//# sourceMappingURL=resolve.js.map