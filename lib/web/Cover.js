"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cover = void 0;
var react_1 = __importDefault(require("react"));
var react_awesome_reveal_1 = require("react-awesome-reveal");
var antd_1 = require("antd");
var _1 = require(".");
var Content = antd_1.Layout.Content;
var Title = antd_1.Typography.Title;
exports.Cover = function (props) {
    return (react_1.default.createElement(react_awesome_reveal_1.Fade, { style: { width: "100%" } },
        react_1.default.createElement(Content, { style: _1.styles.cover.container },
            props.children,
            react_1.default.createElement(Content, { style: _1.styles.cover.content },
                react_1.default.createElement(Title, { level: 1, style: _1.styles.cover.text },
                    " ",
                    props.title,
                    " "),
                react_1.default.createElement(Title, { level: 3, style: _1.styles.cover.text },
                    " ",
                    props.subtitle,
                    " "),
                react_1.default.createElement(antd_1.Button, { type: "primary", href: props.action.link }, props.action.title)))));
};
//# sourceMappingURL=Cover.js.map