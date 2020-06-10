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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Navigator = void 0;
var react_1 = __importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
var _1 = require(".");
/**
 *
 * @param route
 */
var renderRoute = function (route, routes) {
    return (react_1.default.createElement(react_router_dom_1.Route, { exact: true, key: "" + route.id, path: route.path, render: function (props) { return (react_1.default.createElement(_1.Screen, __assign({}, props, { route: route, routes: routes }))); } }));
};
/**
 *
 * @param props
 */
exports.Navigator = function (props) {
    return (react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
        react_1.default.createElement(react_router_dom_1.Switch, null, props.routes.map(function (route, i) { return (renderRoute(route, props.routes)); }))));
};
//# sourceMappingURL=Navigator.js.map