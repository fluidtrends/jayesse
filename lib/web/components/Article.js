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
exports.Article = void 0;
const react_1 = __importStar(require("react"));
const antd_1 = require("antd");
const components_1 = require("../components");
const react_router_dom_1 = require("react-router-dom");
const react_awesome_reveal_1 = require("react-awesome-reveal");
const styles = __importStar(require("../../styles"));
const react_progressive_image_1 = __importDefault(require("react-progressive-image"));
const src_1 = require("@carmel/js/src");
const { useScroll, useViewport } = src_1.hooks;
const { Content } = antd_1.Layout;
exports.Article = (props) => {
    const { assets } = props;
    const [data, setData] = react_1.useState();
    const [isLoading, setIsLoading] = react_1.useState(true);
    const [notFound, setIsNotFound] = react_1.useState(false);
    const { authors, posts, post } = assets;
    const history = react_router_dom_1.useHistory();
    const location = react_router_dom_1.useLocation();
    const slug = location.pathname.substring(props.path.substring(0, props.path.indexOf(':')).length);
    const { isSmall, scale, isPortrait, isMobile } = useViewport();
    const { string, cover } = assets;
    react_1.useEffect(() => {
        const found = posts.find((post) => post.slug === slug);
        if (!found) {
            setIsNotFound(true);
            setIsLoading(false);
            return;
        }
        setData(found);
        setIsLoading(false);
    }, []);
    const coverImage = `${cover("top")}/${isPortrait ? 'portrait' : 'landscape'}@${scale}x.png`;
    const coverPlaceholder = `${cover("top")}}/placeholder.png`;
    const renderCover = () => {
        return react_1.default.createElement(react_awesome_reveal_1.Fade, { style: { width: "100%" } },
            react_1.default.createElement(react_progressive_image_1.default, { src: coverImage, placeholder: coverPlaceholder }, (src) => (react_1.default.createElement(Content, { style: Object.assign(Object.assign(Object.assign({}, styles.layouts.fullscreen), styles.layouts.cover), { backgroundImage: `url(${src})` }) }))));
    };
    const renderText = () => {
        return react_1.default.createElement(components_1.Text, Object.assign({}, props, { isPost: true, source: `posts/${slug}`, heading: {
                textAlign: "left"
            }, paragraph: {
                textAlign: "left"
            }, layout: Object.assign(Object.assign({}, props.layout), { backgoundColor: "#ffffff", maxWidth: props.image ? "60vw" : "90vw" }), style: {
                display: 'flex',
                flex: 1
            } }));
    };
    const renderAuthor = () => {
        return react_1.default.createElement("div", { style: {
                display: "flex",
                width: "100%",
                alignItems: "center",
                flexDirection: "column",
                justifyContent: "center",
            } },
            react_1.default.createElement(antd_1.Avatar, { src: authors[data.author].image, size: { xs: 60, sm: 60, md: 60, lg: 64, xl: 80, xxl: 100 }, style: {} }),
            react_1.default.createElement("span", null,
                " ",
                `${authors[data.author].fullname} on ${data.date}`,
                " "));
    };
    const renderPost = () => {
        return react_1.default.createElement("div", { style: {
                display: "flex",
                width: "100%",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: props.image && !props.viewport.isSmall ? "flex-start" : "center"
            } },
            renderCover(),
            renderAuthor(),
            renderText());
    };
    const renderLoading = () => {
        return react_1.default.createElement(antd_1.Spin, { size: "large" });
    };
    const renderNotFound = () => {
        return react_1.default.createElement("div", { style: {
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "center"
            } },
            react_1.default.createElement("h2", null, " Post not found "));
    };
    return (react_1.default.createElement("div", { style: {
            display: 'flex',
            justifyContent: "center",
            alignItems: "center",
            padding: 0,
            width: "100%",
            overflow: "auto",
            flexDirection: "column"
        } }, isLoading ? renderLoading() : (notFound ? renderNotFound() : renderPost())));
};
//# sourceMappingURL=Article.js.map