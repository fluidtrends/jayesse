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
exports.fullscreen = __assign(__assign({}, exports.base), { minHeight: "100vh" });
exports.cover = {
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 50%',
};
exports.overlay = __assign(__assign({}, exports.base), { backgroundColor: "rgba(0,0,0,0.5)", color: "#ffffff", textAlign: "center", textShadow: "0px 1px 3px #333333" });
exports.content = __assign(__assign({}, exports.base), { minHeight: 400, padding: 0 });
exports.footer = {
    textAlign: 'center',
    width: "100%"
};
//# sourceMappingURL=layouts.js.map