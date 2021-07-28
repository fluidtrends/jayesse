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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Main = void 0;
const react_1 = __importDefault(require("react"));
const antd_1 = require("antd");
const styles = __importStar(require("../../styles"));
const components_1 = require("../components");
const { Footer, Content } = antd_1.Layout;
const { Paragraph } = antd_1.Typography;
exports.Main = props => {
    const hasHeader = true;
    const hasContent = true;
    const hasFooter = props.footer !== undefined && props.footer;
    const renderHeader = () => (react_1.default.createElement(components_1.Header, Object.assign({}, props, { current: props.id }, props.header, { cover: props.cover, items: props.routes.public })));
    const renderContent = () => (react_1.default.createElement(Content, { style: Object.assign({}, styles.layouts.content) }, props.children));
    const renderFooter = () => (react_1.default.createElement(Footer, { style: styles.layouts.footer },
        react_1.default.createElement(Paragraph, null, props.footer.watermark)));
    return (react_1.default.createElement(antd_1.ConfigProvider, null,
        react_1.default.createElement(antd_1.Layout, { style: Object.assign({}, styles.layouts.fullscreen) },
            hasHeader && renderHeader(),
            hasContent && renderContent(),
            hasFooter && renderFooter())));
};
//# sourceMappingURL=Main.js.map