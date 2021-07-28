"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveContainer = exports.resolveComponent = void 0;
const __1 = require("..");
const react_redux_1 = require("react-redux");
const src_1 = require("@carmel/js/src");
exports.resolveComponent = (component, route, session) => {
    const Component = "function" === (typeof component) ? component : __1.components[component.id];
    const props = "function" === (typeof component) ? {} : component;
    return react_redux_1.connect(src_1.resolveState(session, Object.assign(Object.assign({}, route), props)))(Component);
};
exports.resolveContainer = (type) => {
    const containerId = (type || "main").charAt(0).toUpperCase() + (type || "main").toLowerCase().substring(1);
    return __1.containers[containerId];
};
//# sourceMappingURL=resolve.js.map