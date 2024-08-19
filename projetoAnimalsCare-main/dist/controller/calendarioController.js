"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalendarioController = void 0;
const tsoa_1 = require("tsoa");
const calendarioService_1 = require("../service/calendarioService");
const calendarioRequestDto_1 = require("../model/dto/calendarioRequestDto");
const BasicResponseDto_1 = require("../model/dto/BasicResponseDto");
const calendarioDto_1 = require("../model/dto/calendarioDto");
let CalendarioController = class CalendarioController extends tsoa_1.Controller {
    constructor() {
        super(...arguments);
        this.calendarioService = new calendarioService_1.CalendarioService();
    }
    cadastrarData(dto, fail, success) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const calendario = yield this.calendarioService.cadastrarData(dto);
                return success(201, new BasicResponseDto_1.BasicResponseDto("Data criada com sucesso!", calendario));
            }
            catch (error) {
                return fail(400, new BasicResponseDto_1.BasicResponseDto(error.message, undefined));
            }
        });
    }
    atualizarData(dto, notFound, success) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const calendario = yield this.calendarioService.atualizarData(dto);
                return success(200, new BasicResponseDto_1.BasicResponseDto("Data atualizada com sucesso!", calendario));
            }
            catch (error) {
                return notFound(400, new BasicResponseDto_1.BasicResponseDto(error.message, undefined));
            }
        });
    }
    deletarData(dto, notFound, success) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const calendario = yield this.calendarioService.deletarData(dto);
                return success(200, new BasicResponseDto_1.BasicResponseDto("Data deletada com sucesso!", calendario));
            }
            catch (error) {
                return notFound(400, new BasicResponseDto_1.BasicResponseDto(error.message, undefined));
            }
        });
    }
    filtrarDataById(id, notFound, success) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const calendario = yield this.calendarioService.filtrarDataById(id);
                return success(200, new BasicResponseDto_1.BasicResponseDto("Data encontrado!", calendario));
            }
            catch (error) {
                return notFound(400, new BasicResponseDto_1.BasicResponseDto(error.message, undefined));
            }
        });
    }
};
exports.CalendarioController = CalendarioController;
__decorate([
    (0, tsoa_1.Post)(),
    __param(0, (0, tsoa_1.Body)()),
    __param(1, (0, tsoa_1.Res)()),
    __param(2, (0, tsoa_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [calendarioRequestDto_1.CalendarioRequestDto, Function, Function]),
    __metadata("design:returntype", Promise)
], CalendarioController.prototype, "cadastrarData", null);
__decorate([
    (0, tsoa_1.Put)(),
    __param(0, (0, tsoa_1.Body)()),
    __param(1, (0, tsoa_1.Res)()),
    __param(2, (0, tsoa_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [calendarioDto_1.CalendarioDto, Function, Function]),
    __metadata("design:returntype", Promise)
], CalendarioController.prototype, "atualizarData", null);
__decorate([
    (0, tsoa_1.Delete)(),
    __param(0, (0, tsoa_1.Body)()),
    __param(1, (0, tsoa_1.Res)()),
    __param(2, (0, tsoa_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [calendarioDto_1.CalendarioDto, Function, Function]),
    __metadata("design:returntype", Promise)
], CalendarioController.prototype, "deletarData", null);
__decorate([
    (0, tsoa_1.Get)("id/{id}"),
    __param(0, (0, tsoa_1.Path)()),
    __param(1, (0, tsoa_1.Res)()),
    __param(2, (0, tsoa_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Function, Function]),
    __metadata("design:returntype", Promise)
], CalendarioController.prototype, "filtrarDataById", null);
exports.CalendarioController = CalendarioController = __decorate([
    (0, tsoa_1.Route)("calendario"),
    (0, tsoa_1.Tags)("Calendario")
], CalendarioController);
