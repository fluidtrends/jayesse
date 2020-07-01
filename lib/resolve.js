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
var react_router_dom_1 = require("react-router-dom");
exports.default = (function (target) {
    var config = require('.carmel.json');
    var chunks = {};
    var routes = [];
    config.chunks.map(function (chunkId) {
        var chunkConfig = require("carmel/chunks/" + chunkId + "/chunk.json");
        var chunkRoutes = chunkConfig.routes || [];
        chunkRoutes = chunkRoutes.map(function (route) { return Object.assign({}, route, {
            chunk: chunkId,
            id: chunkId + "/" + route.id,
            path: route.variant ? route.path + "(/:" + route.variant + ")*" : route.path,
            component: react_router_dom_1.withRouter(require("carmel/chunks/" + chunkId + "/screens/" + route.screen + "/" + target).default)
        }); });
        routes = routes.concat(chunkRoutes);
        var chunk = __assign(__assign({ id: chunkId }, chunkConfig), { routes: chunkRoutes });
        chunks[chunkId] = chunk;
    });
    return __assign(__assign({}, config), { chunks: chunks, routes: routes });
});
//# sourceMappingURL=resolve.js.map