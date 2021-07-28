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
exports.Profile = (props) => {
    const { carmel } = props;
    const { account } = carmel;
    const { username, signature } = account;
    const [section, setSection] = react_1.useState("profile");
    const history = react_router_dom_1.useHistory();
    const [error, setError] = react_1.useState("");
    const [isWorking, setWorking] = react_1.useState(false);
    let fields = {};
    const updateFields = (updates) => {
        FIELDS.map((f) => {
            fields[f.id] = fields[f.id] || {};
            fields[f.id].ref = fields[f.id].ref || react_1.useRef(null);
            fields[f.id].value = updates ? (updates[f.id] || "") : "";
        });
    };
    updateFields(carmel.account);
    const Icon = (props) => {
        const Comp = require(`@ant-design/icons`)[props.name];
        return react_1.default.createElement(Comp, null);
    };
    const [form] = antd_1.Form.useForm();
    const onFormChange = () => {
        setError("");
    };
    const layout = {
        wrapperCol: { span: 24 }
    };
    const tailLayout = {
        wrapperCol: { span: 24 }
    };
    const onLogout = () => {
        carmel.logout();
        history.push("/auth");
    };
    const onUpdate = () => {
        carmel.updateAccount();
    };
    const onDownloadSignature = () => {
        carmel.saveSignatureToFile();
    };
    const onFinish = async (v) => {
        updateFields(v);
        carmel.updateAccount(v);
    };
    const renderAction = () => {
        return (react_1.default.createElement(antd_1.Form.Item, Object.assign({}, tailLayout, { style: { padding: 0, margin: 0 } }),
            react_1.default.createElement(antd_1.Button, { disabled: false, type: "primary", size: "large", htmlType: "submit", style: {
                    opacity: 1.0
                } }, 'Update Profile')));
    };
    const renderSubAction = () => {
        return (react_1.default.createElement(antd_1.Form.Item, Object.assign({}, tailLayout, { style: { padding: 0, margin: 0 } }),
            react_1.default.createElement(antd_1.Button, { type: "primary", style: {
                    backgroundColor: "#ffffff",
                    color: "#F50057",
                    border: "none"
                }, onClick: onLogout }, " Sign Out ")));
    };
    const renderField = (field) => (react_1.default.createElement(antd_1.Form.Item, { key: field.id, name: field.id, initialValue: fields[field.id].value, style: { width: 400, margin: 0 } },
        react_1.default.createElement(antd_1.Input, { addonBefore: react_1.default.createElement("div", { style: { width: 90, fontSize: 11 } }, field.title), ref: fields[field.id].ref, style: {
                height: 48,
                opacity: 1.0
            }, value: fields[field.id].value, placeholder: field.placeholder, prefix: react_1.default.createElement(field.icon, { style: { marginLeft: 5 } }) })));
    const renderFields = () => {
        return react_1.default.createElement("div", { style: {
                flex: 1
            } }, FIELDS.map((f) => renderField(f)));
    };
    const renderPeers = (type, total) => {
        return react_1.default.createElement(antd_1.Tag, { key: type, icon: total === 0 ? react_1.default.createElement(icons_1.SyncOutlined, { spin: true }) : react_1.default.createElement(antd_1.Badge, { status: "processing", color: total > 0 ? "green" : "red" }), color: "default", style: {
                marginTop: 0, backgroundColor: "#ffffff",
                borderRadius: 8, padding: 4, paddingLeft: 10, paddingRight: 10, fontSize: 13
            } },
            " ",
            type,
            " ",
            total === 0,
            react_1.default.createElement(antd_1.Badge, { count: total, style: {
                    marginTop: -3,
                    marginLeft: 5,
                    backgroundColor: "#ECEFF1",
                    fontSize: 10,
                } }));
    };
    const renderStatus = () => {
        // let ipfsPeers = carmel.status ? carmel.status.ipfsPeers : 0
        // let carmelPeers = carmel.status ? carmel.status.carmelPeers : 0
        // let carmelNodes = carmel.status ? carmel.status.carmelNodes : 0
        // return <div>
        //   { renderPeers('IPFS Peers', ipfsPeers) }
        //   { renderPeers('Carmel Peers', carmelPeers) }
        //   { renderPeers('Carmel Nodes', carmelNodes) }
        // </div>
    };
    const renderProgress = () => {
        return react_1.default.createElement(antd_1.Spin, { style: { marginTop: 10 } });
    };
    //             <Button type="primary" style={{}} onClick={onUpdate}> Update Profile </Button>
    //             
    //          </div>
    const renderForm = () => {
        return react_1.default.createElement(antd_1.Form.Provider, { onFormChange: onFormChange },
            react_1.default.createElement(antd_1.Form, Object.assign({}, layout, { form: form, name: "control-hooks", onFinish: onFinish, style: {
                    display: "flex",
                    flex: 1,
                    marginTop: 10,
                    width: "100%",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                } }),
                react_1.default.createElement(antd_1.Avatar, { size: 64, icon: react_1.default.createElement(icons_1.UserOutlined, null) }),
                react_1.default.createElement(Title, { level: 2 }, username),
                react_1.default.createElement(antd_1.Divider, null),
                isWorking || renderFields(),
                isWorking && renderProgress(),
                react_1.default.createElement(antd_1.Divider, null),
                isWorking || renderAction()));
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
                } }, renderForm()),
            react_1.default.createElement(antd_1.Button, { type: "primary", size: "small", style: {
                    backgroundColor: "#ffffff",
                    color: "#1E88E5",
                    border: "none"
                }, onClick: onDownloadSignature }, " Download Your Signature "),
            react_1.default.createElement(Text, null, " Save as a file and use it to sign in later "),
            react_1.default.createElement(antd_1.Divider, null),
            isWorking || renderSubAction());
    };
    return renderContent();
};
//# sourceMappingURL=Profile.js.map