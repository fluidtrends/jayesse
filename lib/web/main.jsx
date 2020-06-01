"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_dom_1 = __importDefault(require("react-dom"));
var _1 = require(".");
var props = {
    name: "app"
};
react_dom_1.default.render(<_1.App {...props}/>, document.getElementById('app'));
//# sourceMappingURL=main.jsx.map