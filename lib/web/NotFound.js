"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFound = void 0;
var react_1 = __importDefault(require("react"));
var react_awesome_reveal_1 = require("react-awesome-reveal");
var antd_1 = require("antd");
var _1 = require(".");
var Content = antd_1.Layout.Content;
exports.NotFound = function (props) {
    return (react_1.default.createElement(react_awesome_reveal_1.Fade, { style: { width: "100%" } },
        react_1.default.createElement(Content, { style: _1.styles.notfound.container },
            react_1.default.createElement("h1", { style: _1.styles.notfound.title },
                " ",
                props.title,
                " "),
            react_1.default.createElement("h2", { style: _1.styles.notfound.subtitle },
                " ",
                props.subtitle,
                " "))));
};
//# sourceMappingURL=NotFound.js.map