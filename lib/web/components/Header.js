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
exports.Header = void 0;
var react_1 = __importStar(require("react"));
var antd_1 = require("antd");
var react_router_dom_1 = require("react-router-dom");
var icons_1 = require("@ant-design/icons");
var react_responsive_1 = __importDefault(require("react-responsive"));
var _1 = require(".");
var styles = __importStar(require("../../styles"));
exports.Header = function (props) {
    var history = react_router_dom_1.useHistory();
    var _a = react_1.useState(false), drawerVisible = _a[0], setDrawerVisibility = _a[1];
    var changePage = function (item) {
        window.scroll({ top: 0, behavior: 'smooth' });
        item.path && history.push(item.path);
    };
    var Icon = function (props) {
        var Comp = require("@ant-design/icons")[props.name];
        return react_1.default.createElement(Comp, null);
    };
    var needsDepth = props.inverted;
    var inverted = props.inverted || props.cover === undefined;
    var renderMenuItem = function (item) {
        return (props.current === item.id ?
            react_1.default.createElement("p", { key: item.id, style: __assign(__assign({}, styles.header.menuItemCurrent), (inverted && styles.header.menuItemCurrentInverted)) }, item.name) :
            react_1.default.createElement(antd_1.Button, { type: "link", key: item.id, onClick: function () { return changePage(item); }, style: __assign(__assign({}, styles.header.menuItem), (inverted && styles.header.menuItemInverted)) }, item.name));
    };
    var renderDrawerMenuItem = function (item) { return (props.current === item.id ?
        react_1.default.createElement("p", { key: item.id, style: __assign(__assign({}, styles.header.menuDrawerItem), styles.header.menuDrawerItemCurrent) }, item.name) :
        react_1.default.createElement(antd_1.Button, { type: "link", key: item.id, onClick: function () { return changePage(item); }, style: __assign({}, styles.header.menuDrawerItem) }, item.name)); };
    var toggleDrawer = function () { return setDrawerVisibility(!drawerVisible); };
    var renderDrawer = function () { return (react_1.default.createElement(antd_1.Drawer, { placement: "left", closable: true, bodyStyle: styles.header.drawer, onClose: toggleDrawer, visible: drawerVisible, key: "drawer" }, props.items.map(function (item) { return renderDrawerMenuItem(item); }))); };
    var renderAction = function () { return (props.action ? react_1.default.createElement(antd_1.Button, { type: "link", key: 'action', href: props.action && props.action.link, style: __assign(__assign(__assign({}, styles.header.menuItemIcon), styles.header.menuRight), (inverted && styles.header.menuItemInverted)) },
        react_1.default.createElement(Icon, { name: props.action.icon })) : react_1.default.createElement("div", null)); };
    var render = function () { return (react_1.default.createElement(antd_1.Affix, { offsetTop: 0, style: styles.header.top },
        react_1.default.createElement("div", { style: __assign(__assign(__assign({}, styles.header.header), (inverted && styles.header.headerInverted)), (needsDepth && styles.header.headerDepth)) },
            react_1.default.createElement(react_responsive_1.default, { maxWidth: 768 },
                react_1.default.createElement(antd_1.Button, { type: "link", key: 'menu', onClick: toggleDrawer, style: __assign(__assign({}, styles.header.menuItemIcon), (inverted && styles.header.menuItemInverted)) },
                    react_1.default.createElement(icons_1.MenuFoldOutlined, null))),
            react_1.default.createElement("img", { src: "/assets/logo" + (inverted ? '-inverted' : '') + ".png", style: styles.header.logo }),
            react_1.default.createElement(react_responsive_1.default, { maxWidth: 768 }, renderAction()),
            react_1.default.createElement(react_responsive_1.default, { minWidth: 768 },
                react_1.default.createElement("div", { style: styles.header.menu }, props.items.map(function (item) { return renderMenuItem(item); }))),
            react_1.default.createElement(react_responsive_1.default, { maxWidth: 768 }, renderDrawer())))); };
    return props.cover ? (react_1.default.createElement(_1.Cover, __assign({}, props.cover), render())) : render();
};
//# sourceMappingURL=Header.js.map