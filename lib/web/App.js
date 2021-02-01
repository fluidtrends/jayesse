"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const _1 = require(".");
const hooks_1 = require("../hooks");
const js_1 = require("@carmel/js");
const globals = __importStar(require("./Globals"));
const antd_1 = require("antd");
const styles = __importStar(require("../styles"));
const { useCarmel } = js_1.hooks;
/**
 *
 * @param props
 */
exports.App = (props) => {
    const viewport = hooks_1.useViewport();
    const carmel = useCarmel(props);
    const renderComponent = (component) => {
        const Comp = "function" === (typeof component) ? component : _1.Components[component.id];
        const compProps = "function" === (typeof component) ? {} : component;
        return (react_1.default.createElement("div", { style: {
                backgroundColor: "#ffffff",
                width: "100%",
                margin: 0,
                padding: 0,
                display: "flex",
                flex: 1,
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
            } },
            react_1.default.createElement(Comp, Object.assign({}, props, { carmel: carmel, viewport: viewport }, compProps))));
    };
    const Container = (route) => {
        const containerId = (route.type || "main").charAt(0).toUpperCase() + (route.type || "main").toLowerCase().substring(1);
        const Cont = _1.Containers[containerId];
        return (react_1.default.createElement(Cont, Object.assign({}, props, route), route.components.map((component) => renderComponent(component))));
    };
    const renderRoute = (route) => {
        if (!carmel.ready) {
            return react_1.default.createElement("div", { style: Object.assign({}, styles.layouts.fullscreen) },
                react_1.default.createElement(antd_1.Spin, null));
        }
        if (route.isPrivate && !carmel.account) {
            return react_1.default.createElement(react_router_dom_1.Redirect, { to: { pathname: "/auth" } });
        }
        return [react_1.default.createElement(Container, Object.assign({}, route)), react_1.default.createElement("style", { jsx: true, global: true },
                " ",
                globals.styles({ viewport, theme: props.theme }),
                " ")];
    };
    return (react_1.default.createElement(react_router_dom_1.Switch, null,
        props.routes.all.map((route, i) => (react_1.default.createElement(react_router_dom_1.Route, { strict: true, sensitive: true, exact: route.path === '/', key: `${route.id}`, render: props => renderRoute(route), path: route.path }))),
        react_1.default.createElement(react_router_dom_1.Route, { key: `_notfound`, render: () => (react_1.default.createElement(_1.Containers.Info, Object.assign({}, props.notfound))) })));
};
//# sourceMappingURL=App.js.map