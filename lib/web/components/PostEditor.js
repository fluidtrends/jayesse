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
exports.PostEditor = void 0;
const react_1 = __importStar(require("react"));
const styles = __importStar(require("../../styles"));
const antd_1 = require("antd");
const icons_1 = require("@ant-design/icons");
const react_quill_1 = __importDefault(require("react-quill"));
const { Header, Content, Footer, Sider } = antd_1.Layout;
const { SubMenu } = antd_1.Menu;
const { Title, Text } = antd_1.Typography;
const { Dragger } = antd_1.Upload;
const { Meta } = antd_1.Card;
exports.PostEditor = ({ data }) => {
    const post = data.list.selection();
    const [cover, setCover] = react_1.useState(post.cover);
    const headline = react_1.useRef(null);
    const [form] = antd_1.Form.useForm();
    const [files, setFiles] = react_1.useState([]);
    console.log("post:", post);
    // console.log("state:", data.state)
    const Icon = (props) => {
        const Comp = require(`@ant-design/icons`)[props.name];
        return react_1.default.createElement(Comp, null);
    };
    const layout = {
        wrapperCol: { span: 24 }
    };
    const tailLayout = {
        wrapperCol: { span: 24 }
    };
    const onEditBody = (e) => {
        data.list.updateBlob(post.id, "body", e);
    };
    const saveDraft = () => {
        //   const title =  form.getFieldValue('headline')
        //   const timestamp = Date.now()
        //   const snapshot = {
        //       body,
        //       timestamp,
        //       title
        //   }
        //   console.log(snapshot)
        data.list.push(post.id, { draft: true });
        // const { cid, size } = await carmel.session.node.push('posts_current', snapshot)
        // await data.posts.updateRow(newPostId, ({ title, cid, size, timestamp, status }))
    };
    const publish = () => {
        data.list.push(post.id, { draft: false });
    };
    const onEditHeader = (e) => {
        data.list.update(post.id, { title: e.target.value });
    };
    const onBackToPosts = () => {
        form.resetFields();
        data.list.deselect();
    };
    const onFinish = (v) => {
    };
    const renderMenu = () => {
        return react_1.default.createElement(antd_1.PageHeader, { title: react_1.default.createElement(Text, { type: "secondary", style: { fontWeight: 300 } },
                " ",
                'back to posts',
                " "), onBack: onBackToPosts, backIcon: react_1.default.createElement(icons_1.ArrowLeftOutlined, { style: { color: "#1E88E5", fontSize: 20, fontWeight: 700 } }), style: {
                width: "100%",
                padding: 10,
                margin: 0,
                marginBottom: 20
            }, extra: [
                react_1.default.createElement("a", { key: "save", onClick: saveDraft }, 'Save Draft'),
                react_1.default.createElement(antd_1.Button, { style: {}, type: "primary", key: "editor", onClick: publish }, 'Publish Live')
            ] },
            react_1.default.createElement("div", { style: {} },
                react_1.default.createElement(Title, { level: 2 },
                    post ? 'Edit post' : 'Create a new post',
                    " ")));
    };
    const renderHeadlineField = () => {
        return react_1.default.createElement(antd_1.Form.Item, { key: "headline", name: "headline", initialValue: post ? post.title : "", style: { width: "100%" } },
            react_1.default.createElement(antd_1.Input, { ref: headline, onChange: onEditHeader, style: {
                    height: 48
                }, placeholder: "Enter a headline for this post" }));
    };
    const imageToBase64 = async (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
    };
    const onCoverUpload = async ({ onSuccess, file }) => {
        const imageData = await imageToBase64(file);
        data.list.updateBlob(post.id, "cover", imageData, "image");
        setCover(imageData);
        onSuccess(true);
    };
    const renderCoverImage = () => {
        if (!cover) {
            return react_1.default.createElement("div", null);
        }
        return react_1.default.createElement("img", { alt: "cover", width: "100%", src: cover });
    };
    const renderCoverField = () => {
        return react_1.default.createElement(antd_1.Form.Item, { key: "cover", name: "cover", style: { width: "100%" } },
            react_1.default.createElement(Dragger, { accept: "image/*", showUploadList: false, customRequest: onCoverUpload, style: {
                    border: "none", backgroundColor: "#f5f5f5"
                } },
                react_1.default.createElement(antd_1.Card, { hoverable: true, style: { width: "100%" }, cover: renderCoverImage() },
                    react_1.default.createElement("p", { className: "ant-upload-drag-icon" },
                        react_1.default.createElement(icons_1.InboxOutlined, null)),
                    react_1.default.createElement("p", null, "Click or drag to edit the cover image"))));
    };
    const modules = {
        toolbar: [
            [{ 'header': [1, 2, false] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
            ['link', 'image'],
            ['clean']
        ],
    };
    const formats = [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image'
    ];
    const renderEditor = () => {
        return (react_1.default.createElement("div", { style: {
                width: "100%",
                backgroundColor: "#ffffff",
                height: "70vh",
                padding: 0,
                margin: 0,
                overflowY: "scroll"
            } },
            react_1.default.createElement(react_quill_1.default, { style: {
                    width: "100%",
                    backgroundColor: "#ffffff",
                    paddingBottom: 42,
                    height: "100%"
                }, formats: formats, modules: modules, value: post.body || "", onChange: onEditBody })));
    };
    const renderCompose = () => {
        return react_1.default.createElement(antd_1.Form.Provider, null,
            react_1.default.createElement(antd_1.Form, Object.assign({}, layout, { form: form, name: "container", onFinish: onFinish, style: {
                    alignItems: "center",
                    width: "100%",
                    display: "flex",
                    flex: 1,
                    flexDirection: "column",
                    justifyContent: "center",
                    padding: 0,
                    margin: 0
                } }),
                renderCoverField(),
                renderHeadlineField(),
                renderEditor()));
    };
    const renderContent = () => {
        return react_1.default.createElement("div", { style: Object.assign(Object.assign({}, styles.layouts.fullscreen), { height: "100%", width: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: 'flex-start', padding: 20, flex: 1, backgroundColor: "#f5f5f5" }) },
            renderMenu(),
            renderCompose());
    };
    return renderContent();
};
//# sourceMappingURL=PostEditor.js.map