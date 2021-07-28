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
exports.DataList = void 0;
const react_1 = __importStar(require("react"));
const styles = __importStar(require("../../styles"));
const antd_1 = require("antd");
const { Title, Text } = antd_1.Typography;
exports.DataList = ({ data, title }) => {
    const [isWorking, setWorking] = react_1.useState(false);
    const { list } = data;
    const onEditItem = (p) => {
        data.list.select(p.id);
    };
    const onDeleteItem = (p) => {
        data.list.delete(p.id);
    };
    const onCreateItem = () => {
        data.list.add();
    };
    const renderMenu = () => {
        if (list.isEmpty()) {
            return react_1.default.createElement("div", null);
        }
        return react_1.default.createElement(antd_1.PageHeader, { style: {
                width: "100%",
                padding: 10,
                margin: 0,
                marginBottom: 20
            }, extra: [
                react_1.default.createElement(antd_1.Button, { style: {}, type: "primary", key: "add", onClick: onCreateItem }, 'Create New')
            ] },
            react_1.default.createElement("div", { style: {} },
                react_1.default.createElement(Title, { level: 2 },
                    " ",
                    title,
                    " ")));
    };
    const renderProgress = () => {
        return react_1.default.createElement(antd_1.Spin, { style: { marginTop: 10 } });
    };
    const renderItemTags = (tags) => {
        // {/* <Tag style={{ width: 60, textAlign: "center" }} color={ item.status.toUpperCase() === 'DRAFT' ? 'warning' : 'success' }> 
        //             { item.status.toUpperCase() } 
        //   </Tag>  */}
        return react_1.default.createElement("div", null);
    };
    const renderList = () => {
        if (isWorking) {
            return renderProgress();
        }
        if (list.isEmpty()) {
            return react_1.default.createElement(antd_1.Empty, { image: antd_1.Empty.PRESENTED_IMAGE_SIMPLE, imageStyle: {
                    height: 60,
                }, description: react_1.default.createElement("span", null, "No posts yet") },
                react_1.default.createElement(antd_1.Button, { type: "primary", onClick: onCreateItem }, " Create New "));
        }
        return react_1.default.createElement(antd_1.List, { itemLayout: "horizontal", size: "large", style: {
                width: "100%"
            }, dataSource: list.all(), renderItem: (item) => (react_1.default.createElement(antd_1.List.Item, { style: {
                    backgroundColor: "#ffffff",
                    width: "100%",
                    marginBottom: 20
                }, key: item.title, actions: [
                    react_1.default.createElement("a", { key: "list-edit", onClick: () => onEditItem(item) }, " edit "),
                    react_1.default.createElement("a", { key: "list-edit", style: { color: "#C2185B" }, onClick: () => onDeleteItem(item) }, " delete ")
                ] },
                react_1.default.createElement(antd_1.List.Item.Meta, { title: react_1.default.createElement("a", { href: item.href },
                        " ",
                        item.title,
                        " ") }),
                renderItemTags(item))) });
    };
    const renderContent = () => {
        return react_1.default.createElement("div", { style: Object.assign(Object.assign({}, styles.layouts.fullscreen), { height: "100%", width: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: list.isEmpty() ? 'center' : 'flex-start', padding: 20, flex: 1, backgroundColor: "#f5f5f5" }) },
            renderMenu(),
            renderList());
    };
    return renderContent();
};
//# sourceMappingURL=DataList.js.map