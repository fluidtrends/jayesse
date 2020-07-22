"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodeBlock = void 0;
var react_1 = __importDefault(require("react"));
var react_syntax_highlighter_1 = require("react-syntax-highlighter");
// import style from "react-syntax-highlighter/dist/esm/styles/hljs/monokai";
var prism_1 = require("react-syntax-highlighter/dist/cjs/styles/prism");
exports.CodeBlock = function (props) {
    var language = props.language, value = props.value;
    console.log(">>>", language, ">>>>", value);
    return (react_1.default.createElement(react_syntax_highlighter_1.Prism, { language: language, style: prism_1.okaidia }, value));
};
//# sourceMappingURL=Code.js.map