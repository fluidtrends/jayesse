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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Header = void 0;
const react_1 = __importStar(require("react"));
const antd_1 = require("antd");
const icons_1 = require("@ant-design/icons");
const react_router_dom_1 = require("react-router-dom");
const _1 = require(".");
const styles = __importStar(require("../../styles"));
const src_1 = require("@carmel/js/src");
const { Content } = antd_1.Layout;
const { useScroll, useViewport } = src_1.hooks;
exports.Header = props => {
    const viewport = useViewport();
    const { isSmall, isPortrait } = viewport;
    const scroll = useScroll();
    const history = react_router_dom_1.useHistory();
    const [drawerVisible, setDrawerVisibility] = react_1.useState(false);
    const changePage = (item) => {
        window.scroll({ top: 0, behavior: 'smooth' });
        item.path && history.push(item.path);
    };
    const Icon = (props) => {
        const Comp = require(`@ant-design/icons`)[props.name];
        return react_1.default.createElement(Comp, null);
    };
    const needsDepth = scroll.isScrolled;
    const inverted = scroll.isScrolled || props.cover === undefined;
    const renderMenuItem = (item, i) => {
        if (item.skipMenu) {
            return react_1.default.createElement("div", { key: `${i}` });
        }
        return (props.current === item.id ?
            react_1.default.createElement("p", { key: `${i}`, style: Object.assign(Object.assign(Object.assign({}, styles.header.menuItemCurrent), (inverted && styles.header.menuItemCurrentInverted)), (item.icon && { borderBottom: "0px solid #ffffff" })) }, item.icon ? react_1.default.createElement(antd_1.Avatar, { size: 32, style: { margin: 0, marginTop: -5, backgroundColor: "#ECEFF1", color: "#455A64" }, icon: react_1.default.createElement(Icon, { name: item.icon }) }) : item.name) :
            react_1.default.createElement(antd_1.Button, { key: `${i}`, onClick: () => changePage(item), style: Object.assign(Object.assign({}, styles.header.menuItem), (inverted && styles.header.menuItemInverted)) }, item.icon ? react_1.default.createElement(antd_1.Avatar, { size: 32, style: { margin: 0, backgroundColor: "#455A64" }, icon: react_1.default.createElement(Icon, { name: item.icon }) }) : item.name));
    };
    const renderDrawerMenuItem = (item, i) => (react_1.default.createElement(antd_1.Button, { onClick: () => props.current === item.id || changePage(item), size: "large", type: "link", style: {
            color: "#333333",
            backgroundColor: "#ffffff"
        } }, item.name));
    const toggleDrawer = () => setDrawerVisibility(!drawerVisible);
    const renderDrawer = () => (react_1.default.createElement(antd_1.Drawer, { placement: "left", closable: true, closeIcon: react_1.default.createElement(icons_1.CloseOutlined, { style: {
                fontSize: viewport.fonts.l
            } }), bodyStyle: styles.header.drawer, onClose: toggleDrawer, visible: drawerVisible, width: "50vw", key: "drawer" }, props.items.map((item, i) => renderDrawerMenuItem(item, i))));
    const renderAction = () => (props.action ? react_1.default.createElement(antd_1.Button, { type: "link", key: 'action', href: props.action && props.action.link, style: Object.assign(Object.assign(Object.assign({}, styles.header.menuItemIcon), styles.header.menuRight), (inverted && styles.header.menuItemInverted)) },
        react_1.default.createElement(Icon, { name: props.action.icon })) : react_1.default.createElement("div", null));
    const logo = (inverted ? props.assets.images.logo : props.assets.image('logo-light.png'));
    const renderDrawerButton = () => {
        return (react_1.default.createElement("div", { style: styles.header.menuItemIcon },
            react_1.default.createElement(antd_1.Button, { onClick: toggleDrawer, size: "large", style: { color: inverted ? "#333333" : "#ffffff" }, icon: react_1.default.createElement(icons_1.MenuFoldOutlined, null) })));
    };
    const renderMenuItems = () => {
        return (react_1.default.createElement("div", { key: "items", style: styles.header.menu }, props.items.map((item, i) => renderMenuItem(item, i))));
    };
    const render = () => (react_1.default.createElement(antd_1.Affix, { offsetTop: 0, style: styles.header.top },
        react_1.default.createElement("div", { style: Object.assign(Object.assign(Object.assign(Object.assign({}, styles.header.header), (inverted && styles.header.headerInverted)), (needsDepth && styles.header.headerDepth)), (isSmall && isPortrait && styles.header.headerLarge)) },
            isSmall && isPortrait && renderDrawerButton(),
            react_1.default.createElement(antd_1.Avatar, { size: "large", src: logo }),
            isSmall && isPortrait && renderAction(),
            (isSmall && isPortrait) || renderMenuItems(),
            isSmall && isPortrait && renderDrawer())));
    return props.cover ? (react_1.default.createElement(_1.Cover, Object.assign({}, props.cover, props), render())) :
        react_1.default.createElement("div", { style: Object.assign(Object.assign({}, styles.layouts.base), { flex: 0, marginTop: 30 }) }, render());
};
//# sourceMappingURL=Header.js.map