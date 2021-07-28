"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Posts = void 0;
const react_1 = __importDefault(require("react"));
const _1 = require(".");
exports.Posts = ({ data }) => {
    const { posts } = data;
    if (posts.list.selection()) {
        return react_1.default.createElement(_1.PostEditor, { data: posts });
    }
    console.log(posts);
    return react_1.default.createElement(_1.DataList, { title: "Your Posts", data: posts });
};
//# sourceMappingURL=Posts.js.map