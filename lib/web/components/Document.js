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
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Document = void 0;
const react_1 = __importStar(require("react"));
const hooks_1 = require("../../hooks");
const react_router_dom_1 = require("react-router-dom");
const antd_1 = require("antd");
const react_awesome_reveal_1 = require("react-awesome-reveal");
const react_markdown_1 = __importDefault(require("react-markdown"));
const _1 = require(".");
const okaidia_1 = __importDefault(require("react-syntax-highlighter/dist/cjs/styles/prism/okaidia"));
const react_syntax_highlighter_1 = require("react-syntax-highlighter");
const react_responsive_1 = __importDefault(require("react-responsive"));
const CodeBlock = props => {
    const { language, value } = props;
    return (react_1.default.createElement(react_syntax_highlighter_1.Prism, { language: language, style: okaidia_1.default }, value));
};
const { Content } = antd_1.Layout;
exports.Document = react_router_dom_1.withRouter((props) => {
    const { repo, branch, root, mount } = props;
    const history = react_router_dom_1.useHistory();
    const location = react_router_dom_1.useLocation();
    const path = location.pathname.substring(mount.length + 1);
    const [selected, setSelected] = react_1.useState(location.pathname);
    const { sections, content } = hooks_1.useGitHubDocs(repo, root, branch, path);
    react_1.useEffect(() => {
        if (!sections || !selected)
            return;
        const found = findItem(selected, sections);
        found && found.path && history.push(found.path);
    }, [selected]);
    const findItem = (query, items) => {
        let found = items.find(item => item.path === query);
        if (found)
            return found;
        const children = items.map(item => item.items && findItem(query, item.items)).filter(i => i);
        found = children.find(item => item.path === query);
        return found;
    };
    const onSelect = react_1.useCallback((select) => {
        setSelected(select);
    }, []);
    const renderers = { code: CodeBlock };
    const plugins = [require('remark-shortcodes')];
    return (react_1.default.createElement(antd_1.Layout, { style: { width: "100%" } },
        react_1.default.createElement(react_responsive_1.default, { minWidth: 768 }, sections ? react_1.default.createElement(_1.SideMenu, Object.assign({}, props, { selected: selected, items: sections, onSelect: onSelect }))
            : react_1.default.createElement(antd_1.Skeleton, { loading: true, active: true, paragraph: { rows: 10 }, title: true })),
        react_1.default.createElement(antd_1.Layout, { style: {
                width: "100%",
                backgroundColor: "#ffffff",
                borderLeft: "1px solid #EEEEEE",
            } },
            react_1.default.createElement(Content, { style: { padding: 20, boxShadow: "2px 2px #333333" } },
                react_1.default.createElement(react_awesome_reveal_1.Fade, { style: { width: "100%" } },
                    react_1.default.createElement(Content, { style: { alignItems: 'flex-start' } }, content ? react_1.default.createElement(react_markdown_1.default, { source: content, renderers: renderers, plugins: plugins })
                        : react_1.default.createElement(antd_1.Skeleton, { loading: true, active: true, paragraph: { rows: 10 }, title: true })))))));
});
//# sourceMappingURL=Document.js.map