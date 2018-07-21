"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const defaultOptions = {
    database: {
        engine: 'lowdb',
        path: path_1.default.join(__dirname, 'mock.db')
    },
    open: true,
    server: {
        port: 3001
    }
};
exports.default = defaultOptions;
//# sourceMappingURL=default.config.js.map