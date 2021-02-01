"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useViewport = exports.useScroll = void 0;
const react_1 = require("react");
const constants_1 = require("../constants");
const react_device_detect_1 = require("react-device-detect");
const SCROLL_TRIGGER = 5;
exports.useScroll = () => {
    const [position, setPosition] = react_1.useState(0);
    const [isScrolled, setScrolled] = react_1.useState(false);
    const onScroll = () => {
        const { scrollTop } = document.documentElement || document.body;
        setPosition(scrollTop);
        setScrolled(scrollTop > SCROLL_TRIGGER);
    };
    react_1.useEffect(() => {
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);
    return { position, isScrolled };
};
exports.useViewport = () => {
    const compute = () => {
        const ua = window.navigator.userAgent;
        const { innerWidth, innerHeight, devicePixelRatio } = window;
        const isPortrait = (innerWidth < innerHeight);
        const isSmall = ua === "carmelmobile" || (innerWidth <= constants_1.BREAKPOINT_SMALL && react_device_detect_1.isMobile);
        const weight = ua === "carmelmobile" ? 1 : (isSmall && isPortrait ? devicePixelRatio : 1);
        const baseFontSize = 14;
        const fonts = {
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
            isPortrait,
            isMobile: react_device_detect_1.isMobile,
            isSmall,
            fonts,
            scale: devicePixelRatio
        };
    };
    const current = compute();
    const [viewport, setViewport] = react_1.useState(current);
    const onResize = () => {
        setViewport(compute());
    };
    react_1.useEffect(() => {
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);
    return viewport;
};
//# sourceMappingURL=ui.js.map