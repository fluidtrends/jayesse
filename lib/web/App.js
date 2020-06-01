"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
var react_1 = __importDefault(require("react"));
var _1 = require(".");
exports.App = function (props) {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("p", { style: {} },
            " Jayesse Web App (",
            props.name,
            ") "),
        react_1.default.createElement(_1.Navigator, null)));
};
//# sourceMappingURL=App.js.map