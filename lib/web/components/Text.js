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
exports.Text = void 0;
var react_1 = __importDefault(require("react"));
var hooks_1 = require("../../hooks");
var antd_1 = require("antd");
var react_markdown_1 = __importDefault(require("react-markdown"));
var okaidia_1 = __importDefault(require("react-syntax-highlighter/dist/cjs/styles/prism/okaidia"));
var react_syntax_highlighter_1 = require("react-syntax-highlighter");
var Title = antd_1.Typography.Title, Paragraph = antd_1.Typography.Paragraph;
var renderers = function (styles) { return ({
    code: function (props) { return (react_1.default.createElement(react_syntax_highlighter_1.Prism, { language: props.language, style: okaidia_1.default }, props.value)); },
    heading: function (props) { return (react_1.default.createElement(Title, { level: props.level, style: __assign(__assign({ textAlign: "center" }, styles.layout), styles.heading) }, props.children)); },
    paragraph: function (props) { return (react_1.default.createElement(Paragraph, { style: __assign(__assign({ textAlign: "justify" }, styles.layout), styles.paragraph) }, props.children)); }
}); };
var Content = antd_1.Layout.Content;
exports.Text = function (props) {
    var source = props.source, assets = props.assets;
    var text = hooks_1.useText(assets.text(source));
    var plugins = [require('remark-shortcodes')];
    return (react_1.default.createElement(antd_1.Layout, { style: __assign({ width: "100%", alignItems: "center", justifyContent: "center" }, props.layout || {}) },
        react_1.default.createElement(Content, { style: __assign({ backgroundColor: "#ffffff", color: props.theme.colors.text, padding: 40 }, props.layout || {}) }, text ? react_1.default.createElement(react_markdown_1.default, { source: text, renderers: renderers(props), plugins: plugins })
            : react_1.default.createElement(antd_1.Skeleton, { loading: true, active: true, paragraph: { rows: 10 }, title: true }))));
};
//# sourceMappingURL=Text.js.map