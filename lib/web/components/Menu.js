"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Menu = void 0;
var react_1 = __importDefault(require("react"));
var antd_1 = require("antd");
var icons_1 = require("@ant-design/icons");
var SubMenu = antd_1.Menu.SubMenu, Item = antd_1.Menu.Item;
var Header = antd_1.Layout.Header, Content = antd_1.Layout.Content, Sider = antd_1.Layout.Sider;
exports.Menu = function (props) {
    return (react_1.default.createElement(Sider, { width: 160, className: "site-layout-background", style: {} },
        react_1.default.createElement(antd_1.Menu, { mode: "inline", defaultSelectedKeys: ['1'], defaultOpenKeys: ['sub1'], style: { height: '100%', borderRight: 0
            } },
            react_1.default.createElement(SubMenu, { key: "sub1", icon: react_1.default.createElement(icons_1.UserOutlined, null), title: "subnav 1" },
                react_1.default.createElement(Item, { key: "1" }, "option1"),
                react_1.default.createElement(Item, { key: "2" }, "option2"),
                react_1.default.createElement(Item, { key: "3" }, "option3"),
                react_1.default.createElement(Item, { key: "4" }, "option4")))));
};
//# sourceMappingURL=Menu.js.map