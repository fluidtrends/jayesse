"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Navigator = void 0;
var react_1 = __importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
function Home() {
    return react_1.default.createElement("h2", null, "Home");
}
function About() {
    return react_1.default.createElement("h2", null, "About");
}
function Users() {
    return react_1.default.createElement("h2", null, "Users");
}
var Router = function () {
    return (react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
        react_1.default.createElement("div", null,
            react_1.default.createElement("nav", null,
                react_1.default.createElement("ul", null,
                    react_1.default.createElement("li", null,
                        react_1.default.createElement(react_router_dom_1.Link, { to: "/" }, "Home")),
                    react_1.default.createElement("li", null,
                        react_1.default.createElement(react_router_dom_1.Link, { to: "/about" }, "About")),
                    react_1.default.createElement("li", null,
                        react_1.default.createElement(react_router_dom_1.Link, { to: "/users" }, "Users")))),
            react_1.default.createElement(react_router_dom_1.Switch, null,
                react_1.default.createElement(react_router_dom_1.Route, { path: "/about" },
                    react_1.default.createElement(About, null)),
                react_1.default.createElement(react_router_dom_1.Route, { path: "/users" },
                    react_1.default.createElement(Users, null)),
                react_1.default.createElement(react_router_dom_1.Route, { path: "/" },
                    react_1.default.createElement(Home, null))))));
};
exports.Navigator = function (props) {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("p", { style: {} }, " Jayesse Web Navigator "),
        react_1.default.createElement(Router, null)));
};
//# sourceMappingURL=Navigator.js.map