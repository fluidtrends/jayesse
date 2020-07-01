"use strict";
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
exports.Info = void 0;
var react_1 = __importDefault(require("react"));
var react_awesome_reveal_1 = require("react-awesome-reveal");
var antd_1 = require("antd");
var styles = __importStar(require("../../styles"));
var Content = antd_1.Layout.Content;
exports.Info = function (props) {
    return (react_1.default.createElement(react_awesome_reveal_1.Fade, { style: { width: "100%" } },
        react_1.default.createElement(Content, { style: styles.layouts.fullscreen },
            react_1.default.createElement("h1", { style: styles.fonts.title },
                " ",
                props.title,
                " "),
            react_1.default.createElement("h2", { style: styles.fonts.subtitle },
                " ",
                props.subtitle,
                " "))));
};
//# sourceMappingURL=Info.js.map