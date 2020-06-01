"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Navigator = void 0;
var react_1 = __importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
exports.Navigator = function (props) {
    var renderLink = function (props) { return (react_1.default.createElement("li", { key: props.id },
        react_1.default.createElement(react_router_dom_1.Link, { to: props.path }, props.title))); };
    var renderRoute = function (props) { return (react_1.default.createElement(react_router_dom_1.Route, { key: props.id, exact: true, path: props.path, component: props.screen })); };
    var makeRoutes = function (chunks) {
        var routes = [];
        for (var chunkName in chunks) {
            var screens = chunks[chunkName] && chunks[chunkName].screens;
            if (!screens || screens.length === 0)
                return [];
            for (var screenName in screens) {
                routes.push({
                    id: screenName,
                    name: screenName,
                    screen: screens[screenName],
                    title: screenName,
                    path: screenName
                });
            }
        }
        return routes;
    };
    var routes = makeRoutes(props.chunks);
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
            react_1.default.createElement("div", null,
                react_1.default.createElement("nav", null,
                    react_1.default.createElement("ul", null, routes.map(function (route) { return renderLink(route); }))),
                react_1.default.createElement(react_router_dom_1.Switch, null, routes.map(function (route) { return renderRoute(route); }))))));
};
//# sourceMappingURL=Navigator.js.map