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
exports.Game = void 0;
const react_1 = __importStar(require("react"));
const antd_1 = require("antd");
const icons_1 = require("@ant-design/icons");
const { Content } = antd_1.Layout;
const { Title, Paragraph, Text } = antd_1.Typography;
exports.Game = (props) => {
    const { data } = props;
    const [isWorking, setWorking] = react_1.useState(data.working);
    const [player, setPlayer] = react_1.useState("");
    const [form] = antd_1.Form.useForm();
    react_1.useEffect(() => {
    }, []);
    //   useEffect(() => {
    //     const { results, working } = data
    //     const { findUser } = results
    //   }, data.results.findUser)
    const layout = {
        wrapperCol: { span: 24 }
    };
    const tailLayout = {
        wrapperCol: { span: 24 }
    };
    const onFormChange = () => {
        // setError("")
        // setError("")
    };
    //   const renderUsernameField = () => (
    //     <Form.Item key={"username"} name="username" style={{ width: "100%"}}>
    //         <Input 
    //             ref={usernameFieldRef}
    //             style={{ 
    //               height: 64,
    //               opacity: 1.0
    //             }}
    //             placeholder="Choose a username" 
    //             prefix={<UserOutlined style={{ marginLeft: 5 }} />}/>
    //     </Form.Item>
    //   )
    //   const renderPasswordField = () => (
    //     <Form.Item key={"password"} name="password" style={{ width: "100%"}}>
    //         <Input.Password
    //             type={"password"}
    //             ref={passwordFieldRef}
    //             style={{ 
    //               height: 64,
    //               opacity: 1.0
    //             }}
    //             iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
    //             placeholder="Choose a password" 
    //             prefix={<LockOutlined style={{ marginLeft: 5 }} />}/>
    //     </Form.Item>
    //   )
    //   const renderFields = () => {
    //     return [username ? renderPasswordField() : renderUsernameField()]
    //   }
    //   const renderProgress = () => {
    //     return <Spin tip={info} style={{ marginTop: 10 }}/>
    //   }
    const onFinish = (v) => {
    };
    const onRestart = () => {
        setPlayer("");
    };
    const onChooseAndrew = () => {
        console.log("Andrew");
        setPlayer("Andrew");
    };
    const onChooseJoe = () => {
        console.log("Joe");
        setPlayer("Joe");
    };
    const onChoosePeter = () => {
        console.log("Peter");
    };
    const onChooseLucas = () => {
        console.log("Lucas");
    };
    const onChooseDavid = () => {
        console.log("David");
    };
    const onChooseMatthew = () => {
        console.log("Matthew");
    };
    const renderChooseCharacter = () => {
        return react_1.default.createElement("div", { style: {
                display: "flex",
                flex: 1,
                marginTop: 30,
                width: "100%",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
            } },
            react_1.default.createElement(icons_1.UserOutlined, { style: { fontSize: 40, margin: 20 } }),
            react_1.default.createElement(Title, { level: 2 }, "Choose Your Character"),
            react_1.default.createElement(antd_1.Button, { type: "primary", onClick: onChooseAndrew }, "Andrew"),
            react_1.default.createElement(antd_1.Button, { type: "primary", onClick: onChooseJoe }, "Joe"),
            react_1.default.createElement(antd_1.Button, { type: "primary", onClick: onChoosePeter }, "Peter"),
            react_1.default.createElement(antd_1.Button, { type: "primary", onClick: onChooseLucas }, "Lucas"),
            react_1.default.createElement(antd_1.Button, { type: "primary" }, "David"),
            react_1.default.createElement(antd_1.Button, { type: "primary", onClick: onChooseMatthew }, "Matthew"));
    };
    const renderWelcome = () => {
        return react_1.default.createElement("div", { style: {
                display: "flex",
                flex: 1,
                marginTop: 30,
                width: "100%",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
            } },
            react_1.default.createElement(icons_1.StarOutlined, { style: { fontSize: 40, margin: 20 } }),
            react_1.default.createElement(Title, { level: 2 },
                "Welcome, ",
                player),
            react_1.default.createElement(antd_1.Button, { type: "dashed", size: "small", onClick: onRestart }, "Restart"));
    };
    const renderContent = () => {
        return player ? renderWelcome() : renderChooseCharacter();
    };
    const renderForm = () => {
        return react_1.default.createElement(antd_1.Form.Provider, { onFormChange: onFormChange },
            react_1.default.createElement(antd_1.Form, Object.assign({}, layout, { form: form, name: "control-hooks", onFinish: onFinish, style: {
                    backgroundColor: "#ffffff",
                    boxShadow: "0px 0px 8px #999999",
                    alignItems: "center",
                    minWidth: 450,
                    display: "flex",
                    flex: 1,
                    flexDirection: "column",
                    minHeight: 400,
                    margin: 20,
                    justifyContent: "center",
                    padding: 40,
                } }), renderContent()));
    };
    return renderForm();
};
//# sourceMappingURL=Game.js.map