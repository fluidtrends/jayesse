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
exports.Cover = void 0;
const react_1 = __importDefault(require("react"));
const react_awesome_reveal_1 = require("react-awesome-reveal");
const antd_1 = require("antd");
const styles = __importStar(require("../../styles"));
const react_progressive_image_1 = __importDefault(require("react-progressive-image"));
const hooks_1 = require("../../hooks");
const react_router_dom_1 = require("react-router-dom");
const { Content } = antd_1.Layout;
const { Title } = antd_1.Typography;
exports.Cover = props => {
    const { title, image, assets, subtitle, action } = props;
    const { isSmall, scale, isPortrait, isMobile } = hooks_1.useViewport();
    const history = react_router_dom_1.useHistory();
    const { string, cover } = assets;
    const coverImage = `${cover(image)}/${isPortrait ? 'portrait' : 'landscape'}@${scale}x.png`;
    const coverPlaceholder = `${cover(image)}/placeholder.png`;
    const onMainAction = () => {
        if (!action.link)
            return;
        action.link.startsWith("http") ? window.location.replace(action.link) : history.push(action.link);
    };
    return (react_1.default.createElement(react_awesome_reveal_1.Fade, { style: { width: "100%" } },
        react_1.default.createElement(react_progressive_image_1.default, { src: coverImage, placeholder: coverPlaceholder }, (src) => (react_1.default.createElement(Content, { style: Object.assign(Object.assign(Object.assign({}, styles.layouts.fullscreen), styles.layouts.cover), { backgroundImage: `url(${src})` }) },
            props.children,
            react_1.default.createElement(Content, { style: Object.assign(Object.assign({}, styles.layouts.overlay), { marginTop: (isSmall && isPortrait) ? -30 : 0 }) },
                react_1.default.createElement(Title, { level: 1, style: { color: "#ffffff" } },
                    " ",
                    string(title),
                    " "),
                react_1.default.createElement(Title, { level: 3, style: { color: "#ffffff" } },
                    " ",
                    string(subtitle),
                    " "),
                react_1.default.createElement(antd_1.Button, { onClick: onMainAction, type: "primary", size: "large", style: {} }, string(action.title)),
                isSmall,
                isMobile))))));
};
//# sourceMappingURL=Cover.js.map