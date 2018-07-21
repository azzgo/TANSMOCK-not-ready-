"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lowdb_1 = __importDefault(require("lowdb"));
const FileSync_1 = __importDefault(require("lowdb/adapters/FileSync"));
const config_1 = require("src/configs/config");
class MockModel {
    constructor() {
        const config = config_1.configUtil.getConfig();
        this.db = lowdb_1.default(new FileSync_1.default(config.database.path));
    }
    getMockList() {
        return this.db.getState();
    }
}
exports.mockModel = new MockModel();
//# sourceMappingURL=mock.js.map