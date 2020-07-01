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
exports.subtitle = exports.title = exports.base = void 0;
exports.base = {
    color: "#ffffff",
    textAlign: "center"
};
exports.title = __assign(__assign({}, exports.base), { fontSize: 40 });
exports.subtitle = __assign(__assign({}, exports.base), { fontSize: 20 });
//# sourceMappingURL=fonts.js.map