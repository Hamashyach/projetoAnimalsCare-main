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
exports.ResponsavelController = void 0;
const responsavelService_1 = require("../service/responsavelService");
const responsavelRequestDto_1 = require("../model/dto/responsavelRequestDto");
const BasicResponseDto_1 = require("../model/dto/BasicResponseDto");
const responsavelDto_1 = require("../model/dto/responsavelDto");
const tsoa_1 = require("tsoa");
let ResponsavelController = class ResponsavelController extends tsoa_1.Controller {
    constructor() {
        super(...arguments);
        this.responsavelService = new responsavelService_1.ResponsavelService();
    }
    cadastrarUsuario(dto, fail, sucess) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const responsavel = yield this.responsavelService.cadastarResponsavel(dto);
                return sucess(201, new BasicResponseDto_1.BasicResponseDto("Usuario criado com sucesso!", responsavel));
            }
            catch (error) {
                return fail(400, new BasicResponseDto_1.BasicResponseDto(error.message, undefined));
            }
        });
    }
    atualizarUsuario(dto, notFound, success) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const responsavel = yield this.responsavelService.atualizarResponsavel(dto);
                return success(200, new BasicResponseDto_1.BasicResponseDto("Usuario atualizado com sucesso!", responsavel));
            }
            catch (error) {
                return notFound(400, new BasicResponseDto_1.BasicResponseDto(error.message, undefined));
            }
        });
    }
    deletarUsuario(dto, notFound, success) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = dto;
                yield this.responsavelService.deletarresponsavel(id);
                return success(200, new BasicResponseDto_1.BasicResponseDto("Usuário deletado com sucesso!", undefined));
            }
            catch (error) {
                return notFound(400, new BasicResponseDto_1.BasicResponseDto(error.message, undefined));
            }
        });
    }
    filtrarResponsavelId(id, notFound, success) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const responsavel = yield this.responsavelService.filtrarResponsavelById(id);
                return success(200, new BasicResponseDto_1.BasicResponseDto("Usuario encontrado!", responsavel));
            }
            catch (error) {
                return notFound(400, new BasicResponseDto_1.BasicResponseDto(error.message, undefined));
            }
        });
    }
};
exports.ResponsavelController = ResponsavelController;
__decorate([
    (0, tsoa_1.Post)(),
    __param(0, (0, tsoa_1.Body)()),
    __param(1, (0, tsoa_1.Res)()),
    __param(2, (0, tsoa_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [responsavelRequestDto_1.ResponsavelRequestDto, Function, Function]),
    __metadata("design:returntype", Promise)
], ResponsavelController.prototype, "cadastrarUsuario", null);
__decorate([
    (0, tsoa_1.Put)(),
    __param(0, (0, tsoa_1.Body)()),
    __param(1, (0, tsoa_1.Res)()),
    __param(2, (0, tsoa_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [responsavelDto_1.ResponsavelDto, Function, Function]),
    __metadata("design:returntype", Promise)
], ResponsavelController.prototype, "atualizarUsuario", null);
__decorate([
    (0, tsoa_1.Delete)(),
    __param(0, (0, tsoa_1.Body)()),
    __param(1, (0, tsoa_1.Res)()),
    __param(2, (0, tsoa_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [responsavelDto_1.ResponsavelDto, Function, Function]),
    __metadata("design:returntype", Promise)
], ResponsavelController.prototype, "deletarUsuario", null);
__decorate([
    (0, tsoa_1.Get)("id/{id}"),
    __param(0, (0, tsoa_1.Path)()),
    __param(1, (0, tsoa_1.Res)()),
    __param(2, (0, tsoa_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Function, Function]),
    __metadata("design:returntype", Promise)
], ResponsavelController.prototype, "filtrarResponsavelId", null);
exports.ResponsavelController = ResponsavelController = __decorate([
    (0, tsoa_1.Route)("responsavel"),
    (0, tsoa_1.Tags)("Responsavel")
], ResponsavelController);
