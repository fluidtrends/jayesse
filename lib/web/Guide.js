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
exports.Guide = void 0;
const react_1 = __importStar(require("react"));
const antd_1 = require("antd");
const react_awesome_reveal_1 = require("react-awesome-reveal");
const text = {};
const assets = {
    headerImage: `assets/logo.gif`,
    footerImage: `assets/logo.gif`
};
const styles = {
    main: {
        display: "flex",
        alignItems: "top",
        justifyContent: "center",
        flexDirection: "column",
        backgroundColor: "#ECEFF1",
        overflow: "auto",
        padding: 0,
        margin: 0
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: "row",
        justifyContent: 'center'
    },
    action: {
        margin: "5px"
    },
    message: {
        boxShadow: "0px 1px 3px #90A4AE",
        borderRadius: "5px",
        backgroundColor: "#FAFAFA",
        padding: "8px",
        margin: "5px",
        color: "#37474F"
    },
    toggler: {
        margin: "10px"
    },
    app: {
        display: "flex",
        backgroundColor: "#ECEFF1",
        padding: 0,
        margin: 0,
        flex: 1
    },
    headerImage: {
        height: "48px",
        width: "48px"
    }
};
exports.Guide = (props) => {
    const [stepId, setStepId] = react_1.useState(0);
    const [shown, setShown] = react_1.useState(true);
    const step = () => props.steps[stepId];
    const next = () => setStepId(step().onAction);
    const hide = () => (react_1.default.createElement("div", { style: styles.main },
        react_1.default.createElement("div", { style: styles.header },
            react_1.default.createElement("img", { src: assets.headerImage, style: styles.headerImage }),
            react_1.default.createElement(antd_1.Button, { type: "link", style: styles.toggler, onClick: () => setShown(!shown) }, "show guide")),
        react_1.default.createElement("div", { style: styles.app }, props.children)));
    const show = () => (react_1.default.createElement("div", { style: styles.main },
        react_1.default.createElement("div", { style: styles.header },
            react_1.default.createElement("img", { src: assets.headerImage, style: styles.headerImage }),
            react_1.default.createElement(react_awesome_reveal_1.Fade, null,
                react_1.default.createElement("p", { style: styles.message }, step().message)),
            react_1.default.createElement(antd_1.Button, { type: "primary", style: styles.action, onClick: () => next() }, step().action),
            react_1.default.createElement(antd_1.Button, { type: "link", style: styles.toggler, onClick: () => setShown(!shown) }, "hide guide")),
        react_1.default.createElement("div", { style: styles.app }, props.children)));
    return (react_1.default.createElement("div", { style: styles.app }, props.children));
};
// return (
//     <Affix offsetTop={0}>
//       { shown ? show() : hide() }
//     </Affix>
//# sourceMappingURL=Guide.js.map