"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SlideSet = exports.Slide = void 0;
const react_1 = __importDefault(require("react"));
const antd_1 = require("antd");
const components_1 = require("../components");
const react_router_dom_1 = require("react-router-dom");
const { Content } = antd_1.Layout;
exports.Slide = props => {
    const { imageFirst, text, image, viewport, action, assets } = props;
    const { isSmall } = viewport;
    const history = react_router_dom_1.useHistory();
    const layout = Object.assign({}, props.layout);
    const onMainAction = () => {
        if (!action.link)
            return;
        action.link.startsWith("http") ? window.location.replace(action.link) : history.push(action.link);
    };
    const renderText = () => (react_1.default.createElement("div", { style: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: props.image && !props.viewport.isSmall ? "flex-start" : "center"
        } },
        react_1.default.createElement(components_1.Text, Object.assign({}, props, { source: text, heading: {
                textAlign: props.image ? "left" : "center"
            }, paragraph: {
                textAlign: props.image ? "left" : "center"
            }, layout: Object.assign(Object.assign({}, props.layout), { maxWidth: props.image ? "60vw" : "90vw" }), style: {
                display: 'flex',
                flex: 1
            } })),
        react_1.default.createElement(antd_1.Button, { type: "primary", size: "large", onClick: onMainAction, style: {
                minWidth: 300,
                margin: props.image && !props.viewport.isSmall ? "-20px 0 40px 40px" : "-20px 0 40px 0px"
            } }, assets.string(action.label))));
    const renderImage = () => (react_1.default.createElement("img", { src: props.assets.image(image), style: {
            display: 'flex',
            width: props.viewport.isSmall || !props.image ? "100%" : "40%",
            margin: 20,
            flex: 1
        } }));
    return (react_1.default.createElement(antd_1.Layout, { style: {
            width: "100%",
            alignItems: "center",
            padding: props.depth ? 20 : 0,
            justifyContent: "center"
        } },
        react_1.default.createElement(Content, { style: Object.assign(Object.assign({ display: 'flex', boxShadow: props.depth ? "0 0 10px #CCCCCC" : 0, justifyContent: "center", alignItems: "center" }, layout), { width: "100%", flexDirection: props.viewport.isSmall ? 'column' : 'row' }) },
            (imageFirst || (isSmall)) && props.image && renderImage(),
            renderText(),
            !(imageFirst || (isSmall)) && props.image && renderImage())));
};
exports.SlideSet = props => {
    const { slides } = props;
    return (react_1.default.createElement("div", { style: {
            display: 'flex',
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column"
        } }, slides.map((slide) => (react_1.default.createElement(exports.Slide, Object.assign({}, slide, props))))));
};
//# sourceMappingURL=Slide.js.map