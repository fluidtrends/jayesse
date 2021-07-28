"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_dom_1 = require("react-dom");
const server_1 = require("react-dom/server");
const render_1 = require("./render");
// import prettier from "prettier"
const { app } = render_1.renderApp();
react_dom_1.render(app, document.getElementById('app'));
exports.default = (options) => server_1.renderToStaticMarkup(app);
//# sourceMappingURL=static.js.map