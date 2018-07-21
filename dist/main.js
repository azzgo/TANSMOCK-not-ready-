"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app/app.module");
const openurl_1 = __importDefault(require("openurl"));
const config_1 = require("src/configs/config");
function startServer(options) {
    return __awaiter(this, void 0, void 0, function* () {
        config_1.configUtil.setConfig(options);
        const app = yield core_1.NestFactory.create(app_module_1.ApplicationModule);
        const config = config_1.configUtil.getConfig();
        app.listen(config.server.port, () => {
            if (config.open) {
                openurl_1.default.open(`http://localhost:${config.server.port}/ui-dashboard`);
            }
        });
        return app;
    });
}
exports.startServer = startServer;
//# sourceMappingURL=main.js.map