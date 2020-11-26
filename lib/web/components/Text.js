"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Text = void 0;
const react_1 = __importDefault(require("react"));
const hooks_1 = require("../../hooks");
const antd_1 = require("antd");
const react_markdown_1 = __importDefault(require("react-markdown"));
const okaidia_1 = __importDefault(require("react-syntax-highlighter/dist/cjs/styles/prism/okaidia"));
const react_syntax_highlighter_1 = require("react-syntax-highlighter");
const { Title, Paragraph } = antd_1.Typography;
const renderers = (styles) => ({
    code: (props) => (react_1.default.createElement(react_syntax_highlighter_1.Prism, { language: props.language, style: okaidia_1.default }, props.value)),
    heading: (props) => (react_1.default.createElement(Title, { level: props.level, style: Object.assign(Object.assign({ textAlign: "center" }, styles.layout), styles.heading) }, props.children)),
    paragraph: (props) => (react_1.default.createElement(Paragraph, { style: Object.assign(Object.assign({ textAlign: "justify" }, styles.layout), styles.paragraph) }, props.children))
});
const { Content } = antd_1.Layout;
exports.Text = props => {
    const { source, assets } = props;
    const text = hooks_1.useText(assets.text(source));
    const plugins = [require('remark-shortcodes')];
    const renderMarkdown = () => {
        if (!text)
            return (react_1.default.createElement(antd_1.Skeleton, { loading: true, active: true, paragraph: { rows: 10 }, title: true }));
        return react_1.default.createElement(react_markdown_1.default, { source: text, renderers: renderers(props), plugins: plugins });
    };
    return (react_1.default.createElement(antd_1.Layout, { style: {
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
        } },
        react_1.default.createElement(Content, { style: Object.assign({ color: props.theme.colors.text, padding: 40 }, props.layout || {}) }, renderMarkdown())));
};
//# sourceMappingURL=Text.js.map