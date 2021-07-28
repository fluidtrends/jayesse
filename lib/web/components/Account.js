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
exports.Account = void 0;
const react_1 = __importStar(require("react"));
const styles = __importStar(require("../../styles"));
const antd_1 = require("antd");
const icons_1 = require("@ant-design/icons");
const react_router_dom_1 = require("react-router-dom");
const { Header, Content, Footer, Sider } = antd_1.Layout;
const { SubMenu } = antd_1.Menu;
const { Title, Paragraph, Text } = antd_1.Typography;
const FIELDS = [{
        id: "name",
        title: "Name",
        placeholder: "What's your name?",
        icon: icons_1.UserOutlined
    }, {
        id: "location",
        title: "Location",
        placeholder: "Where are you from?",
        icon: icons_1.EnvironmentOutlined
    }];
exports.Account = (props) => {
    const { carmel } = props;
    const [isWorking, setWorking] = react_1.useState(true);
    const [user, setUser] = react_1.useState({});
    const [error, setError] = react_1.useState("");
    const location = react_router_dom_1.useLocation();
    const username = location.hash.substring(1);
    const renderProgress = () => {
        return react_1.default.createElement(antd_1.Spin, { style: { marginTop: 10 } });
    };
    const renderError = () => {
        return react_1.default.createElement(antd_1.Alert, { message: error, type: "warning", showIcon: true });
    };
    react_1.useEffect(() => {
        if (carmel.newEvent && carmel.newEvent.type === carmel.EVENT.USER_LOOKUP_DONE) {
            if (!carmel.newEvent.data.did) {
                setError(`The user ${carmel.newEvent.data.username} does not exit`);
                setUser(carmel.newEvent.data);
                setWorking(false);
                return;
            }
            carmel.loadUser(carmel.newEvent.data);
            return;
        }
        if (carmel.newEvent && carmel.newEvent.type === carmel.EVENT.USER_DATA_LOOKUP_DONE) {
            setUser(carmel.newEvent.data);
            setWorking(false);
            return;
        }
        carmel.findUser(username, true);
    }, [username]);
    const renderUserData = () => {
        if (isWorking) {
            return renderProgress();
        }
        if (error) {
            return renderError();
        }
        const data = FIELDS.map((f) => ({ title: f.title, icon: f.icon, description: user[f.id] }));
        return react_1.default.createElement("div", { style: {
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
            react_1.default.createElement(antd_1.List, { itemLayout: "horizontal", dataSource: data, style: {
                    width: "100%"
                }, renderItem: item => (react_1.default.createElement(antd_1.List.Item, null,
                    react_1.default.createElement(antd_1.List.Item.Meta, { avatar: react_1.default.createElement(item.icon, null), title: item.title, description: item.description }))) }));
    };
    const renderContent = () => {
        return react_1.default.createElement("div", { style: Object.assign(Object.assign({}, styles.layouts.fullscreen), { height: "100%", width: "100%", display: "flex", flexDirection: "column", alignItems: "center", padding: 20, flex: 1, backgroundColor: "#f5f5f5" }) }, renderUserData());
    };
    return renderContent();
};
//# sourceMappingURL=Account.js.map