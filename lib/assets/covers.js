"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.covers = exports.cover = exports.all = exports.main = void 0;
var base_1 = require("./base");
exports.main = 'main.r.png';
exports.all = { main: exports.main };
exports.cover = function (base, id) { return base_1.assetPath(base, id, 'covers'); };
exports.covers = function (base) { return base_1.assetsPaths(base, exports.all, 'covers'); };
//# sourceMappingURL=covers.js.map