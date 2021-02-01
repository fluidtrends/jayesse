"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.footer = exports.content = exports.overlay = exports.cover = exports.fullscreen = exports.base = void 0;
exports.base = {
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: "#ffffff",
    flex: 1,
    padding: 0,
    margin: 0
};
exports.fullscreen = Object.assign(Object.assign({}, exports.base), { minHeight: "100vh" });
exports.cover = {
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 50%',
};
exports.overlay = Object.assign(Object.assign({}, exports.base), { backgroundColor: "rgba(0,0,0,0.5)", color: "#ffffff", textAlign: "center", textShadow: "0px 1px 3px #333333" });
exports.content = Object.assign(Object.assign({}, exports.base), { minHeight: 400, padding: 0 });
exports.footer = {
    textAlign: 'center',
    width: "100%",
    backgroundColor: "#ffffff",
    boxShadow: "0px 0px 2px #455A64",
};
//# sourceMappingURL=layouts.js.map