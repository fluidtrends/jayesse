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
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
var react_1 = __importStar(require("react"));
var _1 = require(".");
exports.App = function (props) {
    return (react_1.default.createElement(react_1.Fragment, null,
        react_1.default.createElement("p", { style: {} },
            " name: ",
            props.name,
            ") "),
        react_1.default.createElement("p", { style: {} },
            " config: ",
            props.config,
            ") "),
        react_1.default.createElement("p", { style: {} },
            " chunks: ",
            props.chunks,
            ") "),
        react_1.default.createElement(_1.Navigator, null)));
};
//# sourceMappingURL=App.js.map