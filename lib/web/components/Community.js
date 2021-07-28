"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Community = void 0;
const react_1 = __importDefault(require("react"));
const antd_1 = require("antd");
const icons_1 = require("@ant-design/icons");
const { Content } = antd_1.Layout;
exports.Community = props => {
    const { username, hash } = props;
    return (react_1.default.createElement("div", { style: {
            display: 'flex',
            justifyContent: "center",
            alignItems: "center",
            padding: 20,
            backgroundColor: "#ffffff",
            flexDirection: "column"
        } },
        react_1.default.createElement(antd_1.Result, { status: "success", title: "Come join the conversation", subTitle: "Make your voice heard in the Carmel Community", extra: [
                react_1.default.createElement(antd_1.Button, { type: "primary", icon: react_1.default.createElement(icons_1.NotificationOutlined, null), key: "1", href: "http://t.me/carmelplatform" }, "Telegram"),
                react_1.default.createElement(antd_1.Button, { type: "primary", icon: react_1.default.createElement(icons_1.CommentOutlined, null), key: "2", href: "https://forums.eoscommunity.org/c/carmel/31" }, "EOSCommunity"),
                react_1.default.createElement(antd_1.Button, { type: "primary", icon: react_1.default.createElement(icons_1.GithubOutlined, null), key: "3", href: "https://github.com/fluidtrends/carmel" }, "GitHub")
            ] })));
};
//# sourceMappingURL=Community.js.map