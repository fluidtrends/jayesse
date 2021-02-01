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
exports.Profile = void 0;
const react_1 = __importStar(require("react"));
const styles = __importStar(require("../../styles"));
const antd_1 = require("antd");
const icons_1 = require("@ant-design/icons");
const react_router_dom_1 = require("react-router-dom");
const { Header, Content, Footer, Sider } = antd_1.Layout;
const { SubMenu } = antd_1.Menu;
const { Title, Paragraph, Text } = antd_1.Typography;
const MENU = [{
        id: "profile",
        title: "Profile",
        icon: "UserOutlined"
    }];
exports.Profile = (props) => {
    const { carmel } = props;
    const { account } = carmel;
    const { username, signature } = account;
    const [section, setSection] = react_1.useState("profile");
    const history = react_router_dom_1.useHistory();
    const Icon = (props) => {
        const Comp = require(`@ant-design/icons`)[props.name];
        return react_1.default.createElement(Comp, null);
    };
    const onLogout = () => {
        carmel.logout();
        history.push("/auth");
    };
    const onDownloadSignature = () => {
        carmel.saveSignatureToFile();
    };
    const renderFields = () => {
        return react_1.default.createElement("div", { style: {
                flex: 1
            } });
    };
    const renderContent = () => {
        return react_1.default.createElement("div", { style: Object.assign(Object.assign({}, styles.layouts.fullscreen), { height: "100%", width: "100%", display: "flex", flexDirection: "column", alignItems: "center", padding: 20, flex: 1, backgroundColor: "#f5f5f5" }) },
            react_1.default.createElement("div", { style: {
                    boxShadow: "0px 0px 8px #999999",
                    alignItems: "center",
                    width: 600,
                    display: "flex",
                    backgroundColor: "#ffffff",
                    flex: 1,
                    flexDirection: "column",
                    minHeight: 400,
                    maxHeight: 600,
                    margin: 20,
                    justifyContent: "center",
                    padding: 40,
                } },
                react_1.default.createElement(antd_1.Avatar, { size: 64, icon: react_1.default.createElement(icons_1.UserOutlined, null) }),
                react_1.default.createElement(Title, { level: 2 }, username),
                react_1.default.createElement(antd_1.Divider, null),
                renderFields(),
                react_1.default.createElement(antd_1.Divider, null),
                react_1.default.createElement(antd_1.Button, { type: "primary", onClick: onDownloadSignature }, " Download Your Signature "),
                react_1.default.createElement(Text, null, "Save as a file and use it to sign in ")),
            react_1.default.createElement(antd_1.Button, { type: "primary", style: {
                    backgroundColor: "#ffffff",
                    color: "#F50057",
                    border: "none"
                }, onClick: onLogout }, " Sign Out "));
    };
    return renderContent();
};
//# sourceMappingURL=Profile.js.map