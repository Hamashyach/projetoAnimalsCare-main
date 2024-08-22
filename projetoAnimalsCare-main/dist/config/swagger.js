"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupSwagger = void 0;
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
let swaggerSpec;
try {
    const swaggerFile = path_1.default.join(__dirname, '../swagger.json');
    swaggerSpec = JSON.parse(fs_1.default.readFileSync(swaggerFile, 'utf8'));
}
catch (error) {
    console.error('Erro ao carregar o arquivo swagger.json:', error);
    swaggerSpec = {};
}
const setupSwagger = (app) => {
    if (process.env.NODE_ENV !== 'production') {
        app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerSpec));
    }
};
exports.setupSwagger = setupSwagger;
