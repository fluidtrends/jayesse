"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var images_1 = require("./images");
exports.default = (function (base) { return ({
    image: function (id) { return images_1.image(base, id); },
    images: images_1.images(base),
    cover: function (id) { return images_1.cover(base, id); },
    covers: images_1.covers(base)
}); });
//# sourceMappingURL=index.js.map