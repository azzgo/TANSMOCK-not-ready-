"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const default_config_1 = __importDefault(require("src/configs/default.config"));
class Config {
    constructor() {
        this.config = default_config_1.default;
    }
    getConfig() {
        return this.config;
    }
    setConfig(options) {
        this.config = Object.assign({}, default_config_1.default, options);
    }
}
exports.configUtil = new Config();
//# sourceMappingURL=config.js.map