"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.text = exports.strings = void 0;
var base_1 = require("./base");
exports.strings = function (base, locale) {
    if (locale === void 0) { locale = "en"; }
    return require("carmel/assets/" + locale + "/text/strings.json");
};
exports.text = function (base, locale, id) {
    if (locale === void 0) { locale = "en"; }
    return base_1.assetPath(base, locale, id + ".md", "text");
};
//# sourceMappingURL=text.js.map