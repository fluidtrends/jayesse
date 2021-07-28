"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Router = void 0;
const react_1 = __importDefault(require("react"));
const connected_react_router_1 = require("connected-react-router");
const react_router_dom_1 = require("react-router-dom");
const _1 = require(".");
exports.Router = (props) => {
    const { routes, history } = props;
    return (react_1.default.createElement(connected_react_router_1.ConnectedRouter, { history: history },
        react_1.default.createElement(react_router_dom_1.Switch, null,
            routes.all.map((route, i) => (react_1.default.createElement(react_router_dom_1.Route, { strict: false, sensitive: true, exact: true, key: `${route.id}`, render: () => react_1.default.createElement(_1.Route, Object.assign({}, props, route)), path: route.path }))),
            react_1.default.createElement(react_router_dom_1.Route, { key: `_notfound`, render: () => (react_1.default.createElement("h1", null,
                    " ",
                    'Oops',
                    " ")) }))));
};
//# sourceMappingURL=Router.js.map