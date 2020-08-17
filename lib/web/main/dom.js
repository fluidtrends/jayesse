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
var react_1 = __importDefault(require("react"));
var react_dom_1 = __importDefault(require("react-dom"));
var react_router_dom_1 = require("react-router-dom");
var __1 = require("..");
var resolve_1 = __importDefault(require("../../resolve"));
var assets_1 = __importDefault(require("../../assets"));
var basename = '/';
var props = resolve_1.default('web');
var locale = props.locale || 'en';
var assets = assets_1.default(basename, locale);
react_dom_1.default.render(react_1.default.createElement(react_router_dom_1.BrowserRouter, { basename: basename },
    react_1.default.createElement(__1.App, __assign({}, props, { basename: basename, assets: assets }))), document.getElementById('app'));
//# sourceMappingURL=dom.js.map