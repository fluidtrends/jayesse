"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assetsPaths = exports.assetPath = void 0;
exports.assetPath = (base, locale, id, category = 'images') => `${base}assets/${locale}/${category}/${id}`;
exports.assetsPaths = (base, locale, all, category) => {
    let result = {};
    Object.keys(all).map((asset) => result[asset] = exports.assetPath(base, locale, all[asset], category));
    return result;
};
//# sourceMappingURL=base.js.map