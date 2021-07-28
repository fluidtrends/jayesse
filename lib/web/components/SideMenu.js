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
exports.SideMenu = void 0;
const react_1 = __importStar(require("react"));
const antd_1 = require("antd");
const { SubMenu, Item } = antd_1.Menu;
const { Sider } = antd_1.Layout;
exports.SideMenu = props => {
    const onSelect = react_1.useCallback((item) => {
        props.onSelect && props.onSelect(item.key);
    }, []);
    const renderMenuItems = (items) => {
        return props.items.map((item) => renderMenuItem(item));
    };
    const renderSubMenuItems = (item) => {
        return (react_1.default.createElement(SubMenu, { key: item.path, title: item.name }, item.items.map((item) => renderMenuItem(item))));
    };
    const renderMenuItem = (item) => {
        return item.items ? renderSubMenuItems(item) :
            (react_1.default.createElement(Item, { key: item.path }, item.name));
    };
    return (react_1.default.createElement(Sider, { width: 160, className: "site-layout-background", style: {} },
        react_1.default.createElement(antd_1.Menu, { mode: "inline", onSelect: onSelect, defaultSelectedKeys: [props.selected], style: { height: '100%', borderRight: 0
            } }, renderMenuItems(props.items))));
};
//# sourceMappingURL=SideMenu.js.map