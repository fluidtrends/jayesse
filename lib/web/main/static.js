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
var server_1 = __importDefault(require("react-dom/server"));
var react_responsive_1 = require("react-responsive");
var __1 = require("..");
var resolve_1 = __importDefault(require("../../resolve"));
exports.default = (function (options) {
    var html = server_1.default.renderToString(react_1.default.createElement(react_responsive_1.Context.Provider, { value: { width: 500 } },
        react_1.default.createElement(__1.App, __assign({}, resolve_1.default('web')))));
    console.log("********");
    console.log(options, html);
    console.log("********");
    return html;
});
//# sourceMappingURL=static.js.map