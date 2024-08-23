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
exports.PetController = void 0;
const tsoa_1 = require("tsoa");
const petService_1 = require("../service/petService");
const petRequestDto_1 = require("../model/dto/petRequestDto");
const BasicResponseDto_1 = require("../model/dto/BasicResponseDto");
const petDto_1 = require("../model/dto/petDto");
let PetController = class PetController extends tsoa_1.Controller {
    constructor() {
        super(...arguments);
        this.petService = new petService_1.PetService();
    }
    cadastrarPet(dto, fail, sucess) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const pet = yield this.petService.cadastarPet(dto);
                return sucess(201, new BasicResponseDto_1.BasicResponseDto("Pet criado com sucesso!", pet));
            }
            catch (error) {
                return fail(400, new BasicResponseDto_1.BasicResponseDto(error.message, undefined));
            }
        });
    }
    atualizarPet(dto, notFound, success) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const pet = yield this.petService.atualizarPet(dto);
                return success(200, new BasicResponseDto_1.BasicResponseDto("Pet atualizado com sucesso!", pet));
            }
            catch (error) {
                return notFound(400, new BasicResponseDto_1.BasicResponseDto(error.message, undefined));
            }
        });
    }
    deletarPet(dto, notFound, success) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const pet = yield this.petService.deletarPet(dto);
                return success(200, new BasicResponseDto_1.BasicResponseDto("Pet deletado com sucesso!", pet));
            }
            catch (error) {
                return notFound(400, new BasicResponseDto_1.BasicResponseDto(error.message, undefined));
            }
        });
    }
    filtrarPetId(id, notFound, success) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const pet = yield this.petService.filtrarPetById(id);
                return success(200, new BasicResponseDto_1.BasicResponseDto("Pet encontrado!", pet));
            }
            catch (error) {
                return notFound(400, new BasicResponseDto_1.BasicResponseDto(error.message, undefined));
            }
        });
    }
    filterPetByName(name, notFound, success) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const pet = yield this.petService.filterPetByNome(name);
                if (name.length > 0) {
                    return success(200, new BasicResponseDto_1.BasicResponseDto("Pets encontrados!", pet));
                }
                else {
                    return notFound(400, new BasicResponseDto_1.BasicResponseDto("Nenhum pet encontrado com o nome fornecido.", undefined));
                }
            }
            catch (error) {
                return notFound(400, new BasicResponseDto_1.BasicResponseDto(error.message, undefined));
            }
        });
    }
    listarTodosPets(notFound, success) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const pet = yield this.petService.listarTodosPets();
                return success(200, new BasicResponseDto_1.BasicResponseDto("Pets listados com sucesso!", pet));
            }
            catch (error) {
                return notFound(400, new BasicResponseDto_1.BasicResponseDto(error.message, undefined));
            }
        });
    }
};
exports.PetController = PetController;
__decorate([
    (0, tsoa_1.Post)(),
    __param(0, (0, tsoa_1.Body)()),
    __param(1, (0, tsoa_1.Res)()),
    __param(2, (0, tsoa_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [petRequestDto_1.PetRequestDto, Function, Function]),
    __metadata("design:returntype", Promise)
], PetController.prototype, "cadastrarPet", null);
__decorate([
    (0, tsoa_1.Put)(),
    __param(0, (0, tsoa_1.Body)()),
    __param(1, (0, tsoa_1.Res)()),
    __param(2, (0, tsoa_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [petDto_1.PetDto, Function, Function]),
    __metadata("design:returntype", Promise)
], PetController.prototype, "atualizarPet", null);
__decorate([
    (0, tsoa_1.Delete)(),
    __param(0, (0, tsoa_1.Body)()),
    __param(1, (0, tsoa_1.Res)()),
    __param(2, (0, tsoa_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [petDto_1.PetDto, Function, Function]),
    __metadata("design:returntype", Promise)
], PetController.prototype, "deletarPet", null);
__decorate([
    (0, tsoa_1.Get)("id/{id}"),
    __param(0, (0, tsoa_1.Path)()),
    __param(1, (0, tsoa_1.Res)()),
    __param(2, (0, tsoa_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Function, Function]),
    __metadata("design:returntype", Promise)
], PetController.prototype, "filtrarPetId", null);
__decorate([
    (0, tsoa_1.Get)("name/{name}"),
    __param(0, (0, tsoa_1.Query)()),
    __param(1, (0, tsoa_1.Res)()),
    __param(2, (0, tsoa_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Function, Function]),
    __metadata("design:returntype", Promise)
], PetController.prototype, "filterPetByName", null);
__decorate([
    (0, tsoa_1.Get)("all"),
    __param(0, (0, tsoa_1.Res)()),
    __param(1, (0, tsoa_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Function, Function]),
    __metadata("design:returntype", Promise)
], PetController.prototype, "listarTodosPets", null);
exports.PetController = PetController = __decorate([
    (0, tsoa_1.Route)("pet"),
    (0, tsoa_1.Tags)("Pet")
], PetController);
