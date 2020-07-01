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
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Guide = void 0;
var react_1 = __importStar(require("react"));
var antd_1 = require("antd");
var react_awesome_reveal_1 = require("react-awesome-reveal");
var text = {};
var assets = {
    headerImage: "assets/logo.gif",
    footerImage: "assets/logo.gif"
};
var styles = {
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
exports.Guide = function (props) {
    var _a = react_1.useState(0), stepId = _a[0], setStepId = _a[1];
    var _b = react_1.useState(true), shown = _b[0], setShown = _b[1];
    var step = function () { return props.steps[stepId]; };
    var next = function () { return setStepId(step().onAction); };
    var hide = function () { return (react_1.default.createElement("div", { style: styles.main },
        react_1.default.createElement("div", { style: styles.header },
            react_1.default.createElement("img", { src: assets.headerImage, style: styles.headerImage }),
            react_1.default.createElement(antd_1.Button, { type: "link", style: styles.toggler, onClick: function () { return setShown(!shown); } }, "show guide")),
        react_1.default.createElement("div", { style: styles.app }, props.children))); };
    var show = function () { return (react_1.default.createElement("div", { style: styles.main },
        react_1.default.createElement("div", { style: styles.header },
            react_1.default.createElement("img", { src: assets.headerImage, style: styles.headerImage }),
            react_1.default.createElement(react_awesome_reveal_1.Fade, null,
                react_1.default.createElement("p", { style: styles.message }, step().message)),
            react_1.default.createElement(antd_1.Button, { type: "primary", style: styles.action, onClick: function () { return next(); } }, step().action),
            react_1.default.createElement(antd_1.Button, { type: "link", style: styles.toggler, onClick: function () { return setShown(!shown); } }, "hide guide")),
        react_1.default.createElement("div", { style: styles.app }, props.children))); };
    return (react_1.default.createElement("div", { style: styles.app }, props.children));
};
// return (
//     <Affix offsetTop={0}>
//       { shown ? show() : hide() }
//     </Affix>
//# sourceMappingURL=Guide.js.map