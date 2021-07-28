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
exports.Auth = void 0;
const react_1 = __importStar(require("react"));
const antd_1 = require("antd");
const styles = __importStar(require("../../styles"));
const react_router_dom_1 = require("react-router-dom");
const icons_1 = require("@ant-design/icons");
const { Content } = antd_1.Layout;
const { Title, Paragraph, Text } = antd_1.Typography;
exports.Auth = (props) => {
    const { carmel, account, assets } = props;
    const [isWorking, setWorking] = react_1.useState(true);
    const [isReady, setReady] = react_1.useState(false);
    const [login, setLogin] = react_1.useState(false);
    const [user, setUser] = react_1.useState();
    const [username, setUsername] = react_1.useState("");
    const [userDetails, setUserDetails] = react_1.useState({});
    const [password, setPassword] = react_1.useState("");
    const [error, setError] = react_1.useState("");
    const [info, setInfo] = react_1.useState("");
    const usernameFieldRef = react_1.useRef(null);
    const passwordFieldRef = react_1.useRef(null);
    const history = react_router_dom_1.useHistory();
    const [form] = antd_1.Form.useForm();
    react_1.useEffect(() => {
        if (account && !account.mnemonic) {
            history.push(props.onAuthRoute);
            return;
        }
        usernameFieldRef && usernameFieldRef.current && usernameFieldRef.current.focus();
        passwordFieldRef && passwordFieldRef.current && passwordFieldRef.current.focus();
    }, []);
    react_1.useEffect(() => {
        if (!account)
            return;
        setUser(account);
    }, [account]);
    react_1.useEffect(() => {
        if (!carmel.newEvent)
            return;
        const { newEvent, EVENT } = carmel;
        const { type, data } = newEvent;
        switch (type) {
            case EVENT.STATUS_CHANGED:
                if (data == carmel.SESSION_STATUS.READY) {
                    setReady(true);
                    setWorking(false);
                }
                break;
            case EVENT.USER_LOOKUP_DONE:
                if (!data.login && data.did) {
                    setError(`The username is already taken`);
                }
                else if (data.login && !data.did) {
                    setError(`The username does not exist`);
                }
                else {
                    setUsername(data.username);
                    setUserDetails(data);
                }
                setLogin(data.login);
                setReady(true);
                setWorking(false);
                break;
            case EVENT.USER_CREATED:
                setUser(data.user);
                setReady(true);
                setWorking(false);
                break;
            case EVENT.USER_LOGIN:
                if (data.error) {
                    setError(data.error);
                    setUsername(data.username);
                    setLogin(true);
                    setPassword("");
                    setReady(true);
                    setWorking(false);
                    return;
                }
                showProfile();
                break;
        }
    }, [carmel.newEvent]);
    const layout = {
        wrapperCol: { span: 24 }
    };
    const tailLayout = {
        wrapperCol: { span: 24 }
    };
    const onLogout = () => {
        carmel.logout();
    };
    const showProfile = () => {
        setTimeout(() => {
            history.push(props.onAuthRoute);
            location.reload();
        }, 500);
    };
    const onDownload = () => {
        setWorking(true);
        carmel.saveMnemonicToFile(user);
        const t = setTimeout(() => {
            showProfile();
            clearTimeout(t);
        }, 500);
    };
    const onFormChange = () => {
        setError("");
    };
    const renderUsernameField = () => (react_1.default.createElement(antd_1.Form.Item, { key: "username", name: "username", style: { width: "100%" } },
        react_1.default.createElement(antd_1.Input, { ref: usernameFieldRef, style: {
                height: 64,
                opacity: 1.0
            }, placeholder: login ? 'Enter your username' : "Choose a username", prefix: react_1.default.createElement(icons_1.UserOutlined, { style: { marginLeft: 5 } }) })));
    const signatureUpload = (info) => {
        const reader = new FileReader();
        setWorking(true);
        reader.onloadend = () => {
            carmel.login(Object.assign(Object.assign({}, userDetails), { username,
                password, signature: reader.result }));
        };
        info && reader.readAsText(info.file.originFileObj);
    };
    const renderPasswordField = () => {
        return react_1.default.createElement(antd_1.Form.Item, { key: "password", name: "password", style: { width: 400 } },
            react_1.default.createElement(antd_1.Input.Password, { type: "password", ref: passwordFieldRef, onChange: onChangedPassword, style: {
                    height: 64,
                    opacity: 1.0
                }, iconRender: visible => (visible ? react_1.default.createElement(icons_1.EyeTwoTone, null) : react_1.default.createElement(icons_1.EyeInvisibleOutlined, null)), placeholder: login ? 'Enter your Carmel password' : 'Choose a password', prefix: react_1.default.createElement(icons_1.LockOutlined, { style: { marginLeft: 5 } }) }));
    };
    const renderFields = () => {
        return [username ? renderPasswordField() : renderUsernameField()];
    };
    const renderProgress = () => {
        return react_1.default.createElement(antd_1.Spin, { tip: info, style: { marginTop: 10 } });
    };
    const onLogin = () => {
        setUsername("");
        setLogin(true);
    };
    const onRegister = () => {
        setUsername("");
        setLogin(false);
    };
    const onFinish = async (v) => {
        if (!username && !v.username) {
            setError("Please enter a username");
            return;
        }
        if (!username) {
            setInfo(`Checking if username is available ...`);
            setWorking(true);
            carmel.findUser(v.username, login);
            return;
        }
        if (!v.password) {
            setError(login ? "Please enter your password" : "Please choose a password");
            return;
        }
        setInfo(`Creating your Carmel Account ...`);
        setWorking(true);
        carmel.register(username, v.password);
    };
    const onChangedPassword = (e) => {
        setPassword(e.target.value);
    };
    const renderError = () => {
        return react_1.default.createElement(antd_1.Alert, { message: error, type: "error" });
    };
    const validPassword = () => {
        return password && password.length > 1;
    };
    const renderAction = () => {
        if (login && username) {
            return react_1.default.createElement(antd_1.Form.Item, { key: "signature", name: "signature", style: { width: 400, textAlign: "center" } },
                react_1.default.createElement(antd_1.Upload, { disabled: !validPassword(), onChange: signatureUpload },
                    react_1.default.createElement(antd_1.Button, { disabled: !validPassword(), type: "primary", icon: react_1.default.createElement(icons_1.UploadOutlined, null), size: "large" }, "Import Your Signature To Sign In")));
        }
        return (react_1.default.createElement(antd_1.Form.Item, Object.assign({}, tailLayout, { style: { paddingTop: 20 } }),
            react_1.default.createElement(antd_1.Button, { disabled: false, type: "primary", size: "large", htmlType: "submit", style: {
                    opacity: 1.0
                } }, username ? login ? 'Sign In Now' : 'Create Account' : 'Continue')));
    };
    const renderSubAction = () => {
        return (react_1.default.createElement(antd_1.Form.Item, Object.assign({}, tailLayout, { style: { paddingTop: 20 } }),
            react_1.default.createElement(antd_1.Button, { type: "link", size: 'small', style: {
                    backgroundColor: "#EEEEEE",
                    color: "#1976D2"
                }, onClick: login ? onRegister : onLogin },
                " ",
                login ? `Don't have an account yet?` : `Already have an account?`,
                " ")));
    };
    const renderWorkingProgress = () => {
        return react_1.default.createElement("div", { style: Object.assign(Object.assign({}, styles.layouts.fullscreen), { backgroundColor: "#ffffff" }) }, renderProgress());
    };
    const renderDashboard = () => {
        return react_1.default.createElement("div", { style: {
                boxShadow: "0px 0px 8px #999999",
                alignItems: "center",
                width: 600,
                display: "flex",
                flex: 1,
                flexDirection: "column",
                minHeight: 400,
                maxHeight: 600,
                margin: 20,
                justifyContent: "center",
                padding: 40,
            } },
            react_1.default.createElement(Title, { level: 2 }, "Welcome to Carmel"),
            react_1.default.createElement(Title, { level: 4 }, "This is your Carmel Account recovery phrase. Save it in a safe place."),
            react_1.default.createElement("div", { style: {
                    width: "100%",
                    display: "flex",
                    marginTop: 20,
                    marginBottom: 20,
                    flex: 1,
                    flexDirection: "row"
                } },
                react_1.default.createElement("div", { style: {
                        color: "#FDD835",
                        display: "flex",
                        flex: 1,
                        backgroundColor: "#263238",
                        padding: 20,
                        alignItems: "center",
                        justifyContent: "center",
                        textAlign: "center",
                        fontSize: 30,
                    } }, user.mnemonic)),
            react_1.default.createElement(antd_1.Button, { type: "primary", onClick: onDownload }, " Save Recovery Phrase "));
    };
    const renderForm = () => {
        return react_1.default.createElement(antd_1.Form.Provider, { onFormChange: onFormChange },
            react_1.default.createElement(antd_1.Form, Object.assign({}, layout, { form: form, name: "control-hooks", onFinish: onFinish, style: {
                    boxShadow: "0px 0px 8px #999999",
                    alignItems: "center",
                    width: 600,
                    display: "flex",
                    flex: 1,
                    flexDirection: "column",
                    minHeight: 400,
                    maxHeight: 600,
                    margin: 20,
                    justifyContent: "center",
                    padding: 40,
                } }),
                react_1.default.createElement(antd_1.Avatar, { size: "large", src: assets.images.logo, style: { height: 96, width: 96 } }),
                react_1.default.createElement(Title, { level: 3 }, login ? 'Welcome back to Carmel' : 'Welcome to Carmel'),
                react_1.default.createElement(Paragraph, null, login ? 'Sign in with your Carmel ID' : 'Sign up to get your FREE Carmel Account'),
                error && renderError(),
                react_1.default.createElement("div", { style: {
                        display: "flex",
                        flex: 1,
                        marginTop: 10,
                        width: "100%",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                    } },
                    isWorking || renderFields(),
                    isWorking && renderProgress()),
                isWorking || renderAction(),
                isWorking || renderSubAction()));
    };
    return !isReady ? renderWorkingProgress() : user ? renderDashboard() : renderForm();
};
//# sourceMappingURL=Auth.js.map