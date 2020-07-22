"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.covers = exports.images = exports.cover = exports.image = exports.allCovers = exports.allImages = exports.logoInverted = exports.logo = void 0;
var base_1 = require("./base");
exports.logo = 'logo.png';
exports.logoInverted = 'logo-inverted.png';
exports.allImages = { logo: exports.logo, logoInverted: exports.logoInverted };
exports.allCovers = { main: 'main.r.png' };
exports.image = function (base, id) { return base_1.assetPath(base, id, 'images'); };
exports.cover = function (base, id) { return base_1.assetPath(base, id, 'images/covers'); };
exports.images = function (base) { return base_1.assetsPaths(base, exports.allImages, 'images'); };
exports.covers = function (base) { return base_1.assetsPaths(base, exports.allCovers, 'images/covers'); };
//# sourceMappingURL=images.js.map