"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_dom_1 = __importDefault(require("react-dom"));
const react_router_dom_1 = require("react-router-dom");
const __1 = require("..");
const resolve_1 = __importDefault(require("../../resolve"));
const assets_1 = __importDefault(require("../../assets"));
const basename = '/';
const props = resolve_1.default('web');
const locale = props.locale || 'en';
const assets = assets_1.default(basename, locale);
react_dom_1.default.render(react_1.default.createElement(react_router_dom_1.BrowserRouter, { basename: basename },
    react_1.default.createElement(__1.App, Object.assign({}, props, { basename: basename, assets: assets }))), document.getElementById('app'));
//# sourceMappingURL=dom.js.map