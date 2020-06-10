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
var _1 = require(".");
var resolve_1 = __importDefault(require("../resolve"));
var guide = {
    steps: [{
            message: "Hey there, welcome to Carmel. I'm Chunky, your Carmel guide. Ready to get started?",
            action: "Yeah, let's do this",
            onAction: 1
        },
        {
            message: "Cool so let's do this then",
            action: "Download now"
        }]
};
react_dom_1.default.render(react_1.default.createElement(_1.Guide, __assign({}, guide),
    react_1.default.createElement(_1.App, __assign({}, resolve_1.default('web')))), document.getElementById('app'));
//# sourceMappingURL=main.js.map