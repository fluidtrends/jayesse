"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.content = exports.text = exports.container = void 0;
var coverOpacity = 0.5;
exports.container = {
    display: "flex",
    width: "100%",
    minHeight: "100vh",
    backgroundImage: "url(\"assets/cover.r.png\")",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 50%',
    flex: 1,
    alignItems: "center",
    backgroundColor: "#ffffff",
    justifyContent: "center",
    flexDirection: "column",
    overflow: "auto",
    padding: 0,
    margin: 0
};
exports.text = {
    color: "#ffffff",
    textAlign: "center",
    padding: 5
};
exports.content = {
    display: "flex",
    alignItems: "center",
    flex: 1,
    width: "100%",
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: "rgba(0,0,0, " + coverOpacity + ")",
    color: "#ffffff",
    textShadow: "0px 1px 3px #000000",
    padding: 0,
    margin: 0
};
//# sourceMappingURL=cover.js.map