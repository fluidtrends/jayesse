"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const react_1 = __importDefault(require("react"));
const react_2 = require("redux-persist/integration/react");
const react_redux_1 = require("react-redux");
const Router_1 = require("./Router");
/**
 *
 * @param props
 */
exports.App = (props) => {
    const { store, persistor } = props;
    return (react_1.default.createElement(react_redux_1.Provider, { store: store },
        react_1.default.createElement(react_2.PersistGate, { loading: null, persistor: persistor },
            react_1.default.createElement(Router_1.Router, Object.assign({}, props)))));
};
//# sourceMappingURL=App.js.map