"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
var react_1 = __importDefault(require("react"));
var _1 = require(".");
exports.App = function (props) {
    return (react_1.default.createElement(_1.Navigator, { routes: props.routes }));
};
//# sourceMappingURL=App.js.map