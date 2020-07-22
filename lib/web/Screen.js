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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Screen = void 0;
var react_1 = __importStar(require("react"));
var antd_1 = require("antd");
var _1 = require(".");
var antd_2 = require("antd");
var Footer = antd_1.Layout.Footer, Content = antd_1.Layout.Content;
var scrollTrigger = 5;
exports.Screen = function (props) {
    var _a = react_1.useState(0), scrollPosition = _a[0], setScrollPosition = _a[1];
    var onScroll = function () {
        var scrollTop = (document.documentElement || document.body).scrollTop;
        setScrollPosition(scrollTop);
    };
    var hasFooter = props.footer !== undefined && props.footer;
    react_1.useEffect(function () {
        window.addEventListener('scroll', onScroll);
        return function () { return window.removeEventListener('scroll', onScroll); };
    }, []);
    return (react_1.default.createElement(antd_1.Layout, { style: _1.styles.screen.container },
        react_1.default.createElement(antd_2.ConfigProvider, null,
            react_1.default.createElement(_1.Header, __assign({ current: props.id }, props.header, { cover: props.cover, inverted: scrollPosition > scrollTrigger, items: props.routes })),
            react_1.default.createElement(Content, { style: _1.styles.screen.main },
                react_1.default.createElement(props.component, __assign({}, props, { style: _1.styles.screen.content }))),
            hasFooter &&
                react_1.default.createElement(Footer, { style: _1.styles.screen.footer }, props.footer.watermark))));
};
//# sourceMappingURL=Screen.js.map