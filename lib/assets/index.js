"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var images_1 = require("./images");
var text_1 = require("./text");
var _cache = {
    strings: {},
    text: {}
};
exports.default = (function (base, locale) {
    if (locale === void 0) { locale = "en"; }
    _cache.strings = text_1.strings(base, locale);
    return {
        image: function (id) { return images_1.image(base, locale, id); },
        images: images_1.images(base, locale),
        cover: function (id) { return images_1.cover(base, locale, id); },
        covers: images_1.covers(base, locale),
        strings: _cache.strings,
        string: function (id) { return _cache.strings[id] || id; },
        text: function (id) {
            _cache.text[id] = _cache.text[id] || text_1.text(base, locale, id);
            return _cache.text[id];
        }
    };
});
//# sourceMappingURL=index.js.map