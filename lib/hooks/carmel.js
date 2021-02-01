"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCarmel = void 0;
const react_1 = require("react");
exports.useCarmel = () => {
    const [node, setNode] = react_1.useState();
    react_1.useEffect(() => {
        (async () => {
            console.log("INIT Carmel");
            // await Carmel.init()
            // const { Carmel } = require('@carmel/js/src')
            // const c = new Carmel()
            // console.log(f)
            // c.init()
            console.log("INIT Carmel.");
        })();
    }, []);
    return {};
};
//# sourceMappingURL=carmel.js.map