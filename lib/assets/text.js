"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.text = exports.strings = void 0;
const base_1 = require("./base");
exports.strings = (base, locale = "en") => require(`carmel/assets/${locale}/text/strings.json`);
exports.text = (base, locale = "en", id) => base_1.assetPath(base, locale, `${id}.md`, `text`);
//# sourceMappingURL=text.js.map