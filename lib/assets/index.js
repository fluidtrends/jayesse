"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const images_1 = require("./images");
const text_1 = require("./text");
let _cache = {
    strings: {},
    text: {},
    posts: {}
};
exports.default = (base, locale = "en") => {
    _cache.strings = text_1.strings(base, locale);
    return {
        image: (id) => images_1.image(base, locale, id),
        images: images_1.images(base, locale),
        cover: (id) => images_1.cover(base, locale, id),
        covers: images_1.covers(base, locale),
        strings: _cache.strings,
        string: (id) => _cache.strings[id] || id,
        text: (id) => {
            _cache.text[id] = _cache.text[id] || text_1.text(base, locale, id);
            return _cache.text[id];
        },
        authors: text_1.authors(base, locale),
        posts: text_1.posts(base, locale),
        post: (id) => {
            _cache.posts[id] = _cache.posts[id] || text_1.post(base, locale, id);
            return _cache.posts[id];
        }
    };
};
//# sourceMappingURL=index.js.map