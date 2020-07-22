"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assetsPaths = exports.assetPath = void 0;
exports.assetPath = function (base, id, category) {
    if (category === void 0) { category = 'images'; }
    return base + "assets/" + category + "/" + id;
};
exports.assetsPaths = function (base, all, category) {
    var result = {};
    Object.keys(all).map(function (asset) { return result[asset] = exports.assetPath(base, all[asset], category); });
    return result;
};
//# sourceMappingURL=base.js.map