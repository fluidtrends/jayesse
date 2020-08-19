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
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
var react_1 = __importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
var _1 = require(".");
var hooks_1 = require("../hooks");
var globals = __importStar(require("./Globals"));
/**
 *
 * @param props
 */
exports.App = function (props) {
    var viewport = hooks_1.useViewport();
    var renderComponent = function (component) {
        var Comp = "function" === (typeof component) ? component : _1.Components[component.id];
        var compProps = "function" === (typeof component) ? {} : component;
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
            react_1.default.createElement(Comp, __assign({}, props, { viewport: viewport }, compProps))));
    };
    var Container = function (route) {
        var containerId = (route.type || "main").charAt(0).toUpperCase() + (route.type || "main").toLowerCase().substring(1);
        var Cont = _1.Containers[containerId];
        return (react_1.default.createElement(Cont, __assign({}, props, route), route.components.map(function (component) { return renderComponent(component); })));
    };
    console.log(">>", props);
    return (react_1.default.createElement(react_router_dom_1.Switch, null,
        props.routes.map(function (route, i) {
            return (react_1.default.createElement(react_router_dom_1.Route, { strict: true, sensitive: true, exact: route.path === '/', key: "" + route.id, path: route.path },
                react_1.default.createElement(Container, __assign({}, route)),
                react_1.default.createElement("style", { jsx: true, global: true },
                    " ",
                    globals.styles({ viewport: viewport, theme: props.theme }),
                    " ")));
        }),
        react_1.default.createElement(react_router_dom_1.Route, { key: "_notfound", render: function () { return (react_1.default.createElement(_1.Containers.Info, __assign({}, props.notfound))); } })));
};
//# sourceMappingURL=App.js.map