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
exports.SlideSet = exports.Slide = void 0;
var react_1 = __importDefault(require("react"));
var antd_1 = require("antd");
var components_1 = require("../components");
var Content = antd_1.Layout.Content;
exports.Slide = function (props) {
    var imageFirst = props.imageFirst, text = props.text, image = props.image, viewport = props.viewport, action = props.action, assets = props.assets;
    var isSmall = viewport.isSmall, isPortrait = viewport.isPortrait;
    var layout = __assign({ backgroundColor: "#ffffff" }, props.layout);
    var renderText = function () { return (react_1.default.createElement("div", { style: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: props.image && !props.viewport.isSmall ? "flex-start" : "center"
        } },
        react_1.default.createElement(components_1.Text, __assign({}, props, { source: text, heading: {
                textAlign: props.image ? "left" : "center"
            }, paragraph: {
                textAlign: props.image ? "left" : "center"
            }, style: {
                display: 'flex',
                flex: 1
            } })),
        react_1.default.createElement(antd_1.Button, { type: "primary", size: "large", style: {
                minWidth: 300,
                margin: props.image && !props.viewport.isSmall ? "-20px 0 40px 40px" : "-20px 0 40px 0px"
            } }, assets.string(action.label)))); };
    var renderImage = function () { return (react_1.default.createElement("img", { src: props.assets.image(image), style: {
            display: 'flex',
            width: props.viewport.isSmall || !props.image ? "100%" : "40%",
            margin: 20,
            flex: 1
        } })); };
    return (react_1.default.createElement(antd_1.Layout, { style: {
            width: "100%",
            backgroundColor: "#fffff",
            alignItems: "center",
            padding: props.depth ? 20 : 0,
            justifyContent: "center"
        } },
        react_1.default.createElement(Content, { style: __assign(__assign({ display: 'flex', boxShadow: props.depth ? "0 0 10px #CCCCCC" : 0, justifyContent: "center", alignItems: "center" }, layout), { width: "100%", padding: 40, flexDirection: props.viewport.isSmall ? 'column' : 'row' }) },
            (imageFirst || (isSmall)) && props.image && renderImage(),
            renderText(),
            !(imageFirst || (isSmall)) && props.image && renderImage())));
};
exports.SlideSet = function (props) {
    var slides = props.slides;
    return (react_1.default.createElement("div", { style: {
            display: 'flex',
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column"
        } }, slides.map(function (slide) { return (react_1.default.createElement(exports.Slide, __assign({}, slide, props))); })));
};
//# sourceMappingURL=Slide.js.map