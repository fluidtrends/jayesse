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
exports.Blog = void 0;
const react_1 = __importStar(require("react"));
const antd_1 = require("antd");
const react_router_dom_1 = require("react-router-dom");
const { Title } = antd_1.Typography;
const { Content } = antd_1.Layout;
const { Meta } = antd_1.Card;
const IconText = ({ icon, text }) => (react_1.default.createElement(antd_1.Space, null,
    react_1.default.createElement(icon),
    text));
exports.Blog = props => {
    const { assets } = props;
    const [isLoading, setIsLoading] = react_1.useState(true);
    const { authors, posts, post } = assets;
    const history = react_router_dom_1.useHistory();
    react_1.useEffect(() => {
        setIsLoading(false);
    }, []);
    const onPostSelected = (post) => {
        history.push(`${location.pathname}/${post.slug}`);
    };
    const renderPost = (post) => {
        return react_1.default.createElement(antd_1.Card, { hoverable: true, onClick: () => onPostSelected(post), style: {
                margin: 10,
                width: "80vh",
                maxWidth: 800
            }, cover: react_1.default.createElement("img", { alt: "example", src: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" }) },
            react_1.default.createElement(Meta, { avatar: react_1.default.createElement(antd_1.Avatar, { src: authors[post.author].image }), title: react_1.default.createElement("p", { style: {} },
                    " ",
                    post.title,
                    " "), description: react_1.default.createElement("span", { style: {} },
                    " ",
                    `${authors[post.author].fullname} on ${post.date}`) }));
    };
    const renderPos2t = (post) => {
        return react_1.default.createElement(antd_1.Card, { hoverable: true, onClick: () => onPostSelected(post), style: {
                margin: 10,
                maxWidth: 800
            } },
            react_1.default.createElement(antd_1.List.Item, { key: post.title, actions: [], extra: react_1.default.createElement("img", { width: 272, alt: "cover", src: post.cover }) },
                react_1.default.createElement(antd_1.List.Item.Meta, { avatar: react_1.default.createElement(antd_1.Avatar, { src: authors[post.author].image }), title: react_1.default.createElement("p", { style: { color: "#333333" } },
                        " ?????",
                        post.title,
                        " "), description: `written by ${authors[post.author].fullname} on ${post.date}` }),
                post.preview));
    };
    const renderPosts = () => {
        return react_1.default.createElement(antd_1.List, { itemLayout: "vertical", size: "large", dataSource: posts, renderItem: renderPost });
    };
    const renderLoading = () => {
        return react_1.default.createElement(antd_1.Spin, { size: "large" });
    };
    return (react_1.default.createElement("div", { style: {
            display: 'flex',
            justifyContent: "center",
            alignItems: "center",
            padding: 20,
            marginTop: 50,
            width: "100%",
            backgroundColor: "#ffffff",
            flexDirection: "column"
        } }, isLoading ? renderLoading() : renderPosts()));
};
//# sourceMappingURL=Blog.js.map