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
exports.Route = void 0;
const react_1 = __importDefault(require("react"));
const src_1 = require("@carmel/js/src");
const react_redux_1 = require("react-redux");
const react_router_dom_1 = require("react-router-dom");
const globals = __importStar(require("./Globals"));
const render_1 = require("./main/render");
const resolve_1 = require("./main/resolve");
exports.Route = (props) => {
    const { isPrivate, type, components } = props;
    const { useCarmel, useViewport } = src_1.hooks;
    const dispatch = react_redux_1.useDispatch();
    const carmel = useCarmel(props, dispatch);
    const { ready, account, session } = carmel;
    const viewport = useViewport();
    const GlobalStyle = globals.styles({ viewport, theme: props.theme });
    if (!ready) {
        return react_1.default.createElement("div", null);
    }
    if (isPrivate && !account) {
        return react_1.default.createElement(react_router_dom_1.Redirect, { to: { pathname: "/auth" } });
    }
    const Container = resolve_1.resolveContainer(type);
    if (!Container) {
        return react_1.default.createElement("div", null);
    }
    return (react_1.default.createElement(Container, Object.assign({}, props),
        components.map((component, i) => render_1.renderComponent(component, i, Object.assign(Object.assign({}, props), { account, carmel, viewport }), session)),
        react_1.default.createElement(GlobalStyle, null)));
};
//# sourceMappingURL=Route.js.map