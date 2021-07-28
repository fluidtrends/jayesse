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
exports.Dashboard = void 0;
const react_1 = __importStar(require("react"));
const styles = __importStar(require("../../styles"));
const antd_1 = require("antd");
const react_router_dom_1 = require("react-router-dom");
const { Header, Content, Footer, Sider } = antd_1.Layout;
const { SubMenu } = antd_1.Menu;
const { Paragraph } = antd_1.Typography;
exports.Dashboard = (props) => {
    const { carmel, routes, id } = props;
    const [section, setSection] = react_1.useState(id);
    const history = react_router_dom_1.useHistory();
    const hasHeader = true;
    const hasContent = true;
    const hasFooter = props.footer !== undefined && props.footer;
    const Icon = (props) => {
        const Comp = require(`@ant-design/icons`)[props.name];
        return react_1.default.createElement(Comp, null);
    };
    const onLogout = () => {
        carmel.logout();
        history.push("/auth");
    };
    const renderMenuRoute = (r, i) => {
        return react_1.default.createElement(antd_1.Menu.Item, { key: `${r.id}`, icon: react_1.default.createElement(Icon, { name: r.icon || 'AppstoreOutlined' }), style: {} }, r.name);
    };
    const onMenuSelected = (item) => {
        setSection(item.key);
        const route = routes.private.find((r) => r.id === item.key);
        history.push(route.path);
    };
    const renderMenu = () => {
        return react_1.default.createElement(antd_1.Menu, { onSelect: onMenuSelected, mode: "inline", defaultSelectedKeys: [section], style: {
                width: 200
            } }, routes.private.map((r, i) => renderMenuRoute(r, i)));
    };
    const renderContent = () => (react_1.default.createElement(Content, { style: Object.assign({}, styles.layouts.content) }, props.children));
    return (react_1.default.createElement(antd_1.ConfigProvider, null,
        react_1.default.createElement(antd_1.Layout, { style: Object.assign(Object.assign({}, styles.layouts.fullscreen), { flexDirection: "row", alignItems: "flex-start" }) },
            renderMenu(),
            renderContent())));
};
//# sourceMappingURL=Dashboard.js.map