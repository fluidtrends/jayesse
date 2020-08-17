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
exports.Main = void 0;
var react_1 = __importDefault(require("react"));
var antd_1 = require("antd");
var styles = __importStar(require("../../styles"));
var components_1 = require("../components");
var Footer = antd_1.Layout.Footer, Content = antd_1.Layout.Content;
var Paragraph = antd_1.Typography.Paragraph;
exports.Main = function (props) {
    var hasHeader = true;
    var hasContent = true;
    var hasFooter = props.footer !== undefined && props.footer;
    var renderHeader = function () { return (react_1.default.createElement(components_1.Header, __assign({}, props, { current: props.id }, props.header, { cover: props.cover, items: props.routes }))); };
    var renderContent = function () { return (react_1.default.createElement(Content, { style: styles.layouts.content }, props.children)); };
    var renderFooter = function () { return (react_1.default.createElement(Footer, { style: styles.layouts.footer },
        react_1.default.createElement(Paragraph, null, props.footer.watermark))); };
    return (react_1.default.createElement(antd_1.ConfigProvider, null,
        react_1.default.createElement(antd_1.Layout, { style: __assign({}, styles.layouts.fullscreen) },
            hasHeader && renderHeader(),
            hasContent && renderContent(),
            hasFooter && renderFooter())));
};
//# sourceMappingURL=Main.js.map