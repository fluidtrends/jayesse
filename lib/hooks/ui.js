"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useViewport = exports.useScroll = void 0;
var react_1 = require("react");
var constants_1 = require("../constants");
var SCROLL_TRIGGER = 5;
exports.useScroll = function () {
    var _a = react_1.useState(0), position = _a[0], setPosition = _a[1];
    var _b = react_1.useState(false), isScrolled = _b[0], setScrolled = _b[1];
    var onScroll = function () {
        var scrollTop = (document.documentElement || document.body).scrollTop;
        setPosition(scrollTop);
        setScrolled(scrollTop > SCROLL_TRIGGER);
    };
    react_1.useEffect(function () {
        window.addEventListener('scroll', onScroll);
        return function () { return window.removeEventListener('scroll', onScroll); };
    }, []);
    return { position: position, isScrolled: isScrolled };
};
exports.useViewport = function () {
    var compute = function () {
        var innerWidth = window.innerWidth, innerHeight = window.innerHeight, devicePixelRatio = window.devicePixelRatio;
        var isPortrait = (innerWidth < innerHeight);
        var isSmall = (innerWidth <= constants_1.BREAKPOINT_SMALL);
        var weight = isSmall && isPortrait ? devicePixelRatio : 1;
        var baseFontSize = 14;
        var fonts = {
            xxxl: Math.ceil(baseFontSize * weight * 2.71),
            xxl: Math.ceil(baseFontSize * weight * 2.14),
            xl: Math.ceil(baseFontSize * weight * 1.71),
            l: Math.ceil(baseFontSize * weight * 1.42),
            m: Math.ceil(baseFontSize * weight * 1),
            s: Math.ceil(baseFontSize * weight * 0.83),
            xs: Math.ceil(baseFontSize * weight * 0.64),
        };
        return {
            width: innerWidth,
            height: innerHeight,
            isPortrait: isPortrait,
            isSmall: isSmall,
            fonts: fonts,
            scale: devicePixelRatio
        };
    };
    var current = compute();
    var _a = react_1.useState(current), viewport = _a[0], setViewport = _a[1];
    var onResize = function () {
        setViewport(compute());
    };
    react_1.useEffect(function () {
        window.addEventListener('resize', onResize);
        return function () { return window.removeEventListener('resize', onResize); };
    }, []);
    return viewport;
};
//# sourceMappingURL=ui.js.map