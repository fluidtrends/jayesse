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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cover = void 0;
var react_1 = __importDefault(require("react"));
var react_awesome_reveal_1 = require("react-awesome-reveal");
var antd_1 = require("antd");
var styles = __importStar(require("../../styles"));
var Content = antd_1.Layout.Content;
var Title = antd_1.Typography.Title;
exports.Cover = function (props) {
    var title = props.title, subtitle = props.subtitle, action = props.action;
    return (react_1.default.createElement(react_awesome_reveal_1.Fade, { style: { width: "100%" } },
        react_1.default.createElement(Content, { style: __assign(__assign(__assign({}, styles.layouts.fullscreen), styles.layouts.cover), { backgroundImage: "url(" + props.assets.covers[props.image] + ")" }) },
            props.children,
            react_1.default.createElement(Content, { style: styles.layouts.overlay },
                react_1.default.createElement(Title, { level: 1, style: styles.fonts.title },
                    " ",
                    title,
                    " "),
                react_1.default.createElement(Title, { level: 4, style: styles.fonts.subtitle },
                    " ",
                    subtitle,
                    " "),
                react_1.default.createElement(antd_1.Button, { type: "primary", href: action.link },
                    " ",
                    action.title,
                    " ")))));
};
//# sourceMappingURL=Cover.js.map