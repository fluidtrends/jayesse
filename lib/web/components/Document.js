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
exports.Document = void 0;
var react_1 = __importStar(require("react"));
var hooks_1 = require("../../hooks");
var react_router_dom_1 = require("react-router-dom");
var antd_1 = require("antd");
var react_awesome_reveal_1 = require("react-awesome-reveal");
var react_markdown_1 = __importDefault(require("react-markdown"));
var _1 = require(".");
var okaidia_1 = __importDefault(require("react-syntax-highlighter/dist/cjs/styles/prism/okaidia"));
var react_syntax_highlighter_1 = require("react-syntax-highlighter");
var react_responsive_1 = __importDefault(require("react-responsive"));
var CodeBlock = function (props) {
    var language = props.language, value = props.value;
    return (react_1.default.createElement(react_syntax_highlighter_1.Prism, { language: language, style: okaidia_1.default }, value));
};
var Content = antd_1.Layout.Content;
exports.Document = react_router_dom_1.withRouter(function (props) {
    var repo = props.repo, branch = props.branch, root = props.root, mount = props.mount;
    var history = react_router_dom_1.useHistory();
    var location = react_router_dom_1.useLocation();
    var path = location.pathname.substring(mount.length + 1);
    var _a = react_1.useState(location.pathname), selected = _a[0], setSelected = _a[1];
    var _b = hooks_1.useGitHubDocs(repo, root, branch, path), sections = _b.sections, content = _b.content;
    react_1.useEffect(function () {
        if (!sections || !selected)
            return;
        var found = findItem(selected, sections);
        found && found.path && history.push(found.path);
    }, [selected]);
    var findItem = function (query, items) {
        var found = items.find(function (item) { return item.path === query; });
        if (found)
            return found;
        var children = items.map(function (item) { return item.items && findItem(query, item.items); }).filter(function (i) { return i; });
        found = children.find(function (item) { return item.path === query; });
        return found;
    };
    var onSelect = react_1.useCallback(function (select) {
        setSelected(select);
    }, []);
    var renderers = { code: CodeBlock };
    var plugins = [require('remark-shortcodes')];
    return (react_1.default.createElement(antd_1.Layout, { style: { width: "100%" } },
        react_1.default.createElement(react_responsive_1.default, { minWidth: 768 }, sections ? react_1.default.createElement(_1.SideMenu, { selected: selected, items: sections, onSelect: onSelect })
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