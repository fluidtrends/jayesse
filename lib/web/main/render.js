"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderApp = exports.renderComponent = void 0;
const react_1 = __importDefault(require("react"));
const resolve_1 = require("./resolve");
const __1 = require("..");
const src_1 = require("@carmel/js/src");
const assets_1 = __importDefault(require("../../assets"));
exports.renderComponent = (component, i, route, session) => {
    const Component = resolve_1.resolveComponent(component, route, session);
    if (!Component) {
        return react_1.default.createElement("div", null);
    }
    return (react_1.default.createElement("div", { style: {
            backgroundColor: "#ffffff",
            width: "100%",
            margin: 0,
            padding: 0,
            display: "flex",
            flex: 1,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
        }, key: `${i}` },
        react_1.default.createElement(Component, null)));
};
// export const renderStatic = (app: any, options: any = {}) => {
//     <StaticRouter location="/">
//         <App { ...app.props } />
//     </StaticRouter>
// }
exports.renderApp = (isStatic = false) => {
    var _a;
    process.env.DEBUG = "carmel*";
    let basename = '/';
    if (isStatic) {
        const segments = (_a = window === null || window === void 0 ? void 0 : window.location) === null || _a === void 0 ? void 0 : _a.pathname.split('/');
        if (segments && segments.length > 3 && ['ipfs', 'ipns'].includes(segments[1])) {
            basename = `/${segments[1]}/${segments[2]}/`;
        }
    }
    const props = src_1.resolveWeb();
    const locale = props.locale || 'en';
    const assets = assets_1.default(basename, locale);
    // const app = (<BrowserRouter basename={basename}>
    //     <App {...props} basename={basename} assets={assets}/>
    // </BrowserRouter>)
    const app = react_1.default.createElement(__1.App, Object.assign({}, props, { basename: basename, assets: assets }));
    // const site = <StaticRouter location={basename}>
    //      <App { ...props } basename={basename} assets={assets} />
    // </StaticRouter>
    return { app, props, locale, assets };
};
//# sourceMappingURL=render.js.map