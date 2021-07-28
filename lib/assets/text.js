"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authors = exports.posts = exports.post = exports.text = exports.strings = void 0;
const base_1 = require("./base");
exports.strings = (base, locale = "en") => require(`carmel/assets/${locale}/text/strings.json`);
exports.text = (base, locale = "en", id) => base_1.assetPath(base, locale, `${id}.md`, `text`);
exports.post = (base, locale = "en", id) => base_1.assetPath(base, locale, `${id}.md`, `text/posts`);
exports.posts = (base, locale = "en") => require(`carmel/assets/${locale}/text/posts.json`);
exports.authors = (base, locale = "en") => require(`carmel/assets/${locale}/text/authors.json`);
//# sourceMappingURL=text.js.map