"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Docs = void 0;
var react_1 = __importDefault(require("react"));
var antd_1 = require("antd");
var icons_1 = require("@ant-design/icons");
var _1 = require(".");
var SubMenu = antd_1.Menu.SubMenu;
var Header = antd_1.Layout.Header, Content = antd_1.Layout.Content, Sider = antd_1.Layout.Sider;
exports.Docs = function (props) {
    return (react_1.default.createElement(antd_1.Layout, { style: { width: "100%" } },
        react_1.default.createElement(Sider, { width: 160, className: "site-layout-background", style: {} },
            react_1.default.createElement(antd_1.Menu, { mode: "inline", defaultSelectedKeys: ['1'], defaultOpenKeys: ['sub1'], style: { height: '100%', borderRight: 0
                } },
                react_1.default.createElement(SubMenu, { key: "sub1", icon: react_1.default.createElement(icons_1.UserOutlined, null), title: "subnav 1" },
                    react_1.default.createElement(antd_1.Menu.Item, { key: "1" }, "option1"),
                    react_1.default.createElement(antd_1.Menu.Item, { key: "2" }, "option2"),
                    react_1.default.createElement(antd_1.Menu.Item, { key: "3" }, "option3"),
                    react_1.default.createElement(antd_1.Menu.Item, { key: "4" }, "option4")),
                react_1.default.createElement(SubMenu, { key: "sub2", icon: react_1.default.createElement(icons_1.LaptopOutlined, null), title: "subnav 2" },
                    react_1.default.createElement(antd_1.Menu.Item, { key: "5" }, "option5"),
                    react_1.default.createElement(antd_1.Menu.Item, { key: "6" }, "option6"),
                    react_1.default.createElement(antd_1.Menu.Item, { key: "7" }, "option7"),
                    react_1.default.createElement(antd_1.Menu.Item, { key: "8" }, "option8")),
                react_1.default.createElement(SubMenu, { key: "sub3", icon: react_1.default.createElement(icons_1.NotificationOutlined, null), title: "subnav 3" },
                    react_1.default.createElement(antd_1.Menu.Item, { key: "9" }, "option9"),
                    react_1.default.createElement(antd_1.Menu.Item, { key: "10" }, "option10"),
                    react_1.default.createElement(antd_1.Menu.Item, { key: "11" }, "option11"),
                    react_1.default.createElement(antd_1.Menu.Item, { key: "12" }, "option12")))),
        react_1.default.createElement(antd_1.Layout, { style: {
                width: "100%",
                backgroundColor: "#ffffff",
                border: "1px solid #EEEEEE",
                boxShadow: "1px 1px 5px -2px #333333"
            } },
            react_1.default.createElement(Content, { style: { padding: 20, boxShadow: "2px 2px #333333" } },
                "Content",
                react_1.default.createElement(_1.Text, null)))));
};
//# sourceMappingURL=Docs.js.map