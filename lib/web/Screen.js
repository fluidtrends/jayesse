"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.Screen = void 0;
var react_1 = __importStar(require("react"));
var antd_1 = require("antd");
var react_router_dom_1 = require("react-router-dom");
var Footer = antd_1.Layout.Footer, Content = antd_1.Layout.Content;
var coverOpacity = 0.5;
var styles = {
    layout: {
        display: "flex",
        alignItems: "center",
        justifyContent: "top",
        flexDirection: "column",
        backgroundColor: "#000000",
        overflow: "auto",
        padding: 0,
        margin: 0
    },
    menu: {
        display: "flex",
        backgroundColor: "rgba(0,0,0, " + coverOpacity + ")",
        border: 'none',
        margin: 0,
        padding: 0,
        justifyContent: "flex-end"
    },
    menuItemCurrent: {
        color: "#ffffff",
        margin: "10px",
        borderBottom: "2px solid #ffffff",
        padding: "5px",
        fontSize: "14px"
    },
    menuItem: {
        color: "#ffffff",
        margin: "10px",
        padding: "5px",
        fontSize: "14px"
    },
    cover: {
        width: "100%",
        height: "400px",
        flex: 1,
        backgroundImage: "url(\"assets/cover.r.png\")",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%'
    },
    coverContent: {
        display: "flex",
        alignItems: "center",
        height: "100%",
        justifyContent: "center",
        flexDirection: "column",
        backgroundColor: "rgba(0,0,0, " + coverOpacity + ")",
        overflow: "auto",
        color: "#ffffff",
        textShadow: "0px 1px 3px #000000",
        padding: 0,
        margin: 0
    },
    coverTitle: {
        color: "#ffffff",
        fontSize: "40px"
    },
    main: {
        width: "100%",
        flex: 1,
        display: "flex",
        alignItems: "center",
        height: "100%",
        backgroundColor: "#ffffff",
        justifyContent: "center",
        flexDirection: "column",
        overflow: "auto",
        padding: 0,
        margin: 0
    }
};
exports.Screen = function (props) {
    var _a = react_1.useState(props.route), route = _a[0], setRoute = _a[1];
    var history = react_router_dom_1.useHistory();
    var changePage = function (item) {
        history.push(item.path);
    };
    var menuItem = function (item) {
        return (route.id === item.id ? react_1.default.createElement("p", { key: item.id, style: styles.menuItemCurrent },
            " ",
            item.name,
            " ") :
            react_1.default.createElement(antd_1.Button, { type: "link", key: item.id, style: styles.menuItem, onClick: function () { return changePage(item); } }, item.name));
    };
    var menu = function () { return (react_1.default.createElement("div", { style: styles.menu }, props.routes.map(function (route) { return menuItem(route); }))); };
    var cover = function () {
        return (react_1.default.createElement("div", { style: styles.cover },
            menu(),
            react_1.default.createElement("div", { style: styles.coverContent },
                react_1.default.createElement("h1", { style: styles.coverTitle },
                    " ",
                    route.title,
                    " "))));
    };
    return (react_1.default.createElement(antd_1.Layout, { style: styles.layout },
        cover(),
        react_1.default.createElement(Content, { style: styles.main },
            react_1.default.createElement(route.component, __assign({}, route))),
        react_1.default.createElement(Footer, { style: { textAlign: 'center', width: "100%" } }, " Made with love with Carmel ")));
};
//# sourceMappingURL=Screen.js.map