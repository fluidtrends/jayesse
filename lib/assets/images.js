"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.covers = exports.images = exports.cover = exports.image = exports.allCovers = exports.allImages = exports.logoLight = exports.logo = void 0;
var base_1 = require("./base");
exports.logo = 'logo.png';
exports.logoLight = 'logo-light.png';
exports.allImages = { logo: exports.logo, logoLight: exports.logoLight };
exports.allCovers = { main: 'main' };
exports.image = function (base, locale, id) { return base_1.assetPath(base, locale, id, "images"); };
exports.cover = function (base, locale, id) { return base_1.assetPath(base, locale, id, "images/covers"); };
exports.images = function (base, locale) { return base_1.assetsPaths(base, locale, exports.allImages, "images"); };
exports.covers = function (base, locale) { return base_1.assetsPaths(base, locale, exports.allCovers, "images/covers"); };
//# sourceMappingURL=images.js.map