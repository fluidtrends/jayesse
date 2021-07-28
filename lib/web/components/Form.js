"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Form = void 0;
const react_1 = __importDefault(require("react"));
const antd_1 = require("antd");
const react_wufoo_embed_1 = __importDefault(require("react-wufoo-embed"));
const { Content } = antd_1.Layout;
exports.Form = props => {
    const { username, hash } = props;
    return (react_1.default.createElement("div", { style: {
            display: 'flex',
            justifyContent: "center",
            alignItems: "center",
            padding: 20,
            backgroundColor: "#ffffff",
            flexDirection: "column"
        } },
        react_1.default.createElement(react_wufoo_embed_1.default, { width: "90vw", userName: username, formHash: hash })));
};
//# sourceMappingURL=Form.js.map