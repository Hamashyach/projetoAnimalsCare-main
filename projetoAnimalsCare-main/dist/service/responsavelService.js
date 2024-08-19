"use strict";
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
exports.ResponsavelService = void 0;
const responsavelEntity_1 = require("../model/entity/responsavelEntity");
const responsavelRepository_1 = require("../repository/responsavelRepository");
class ResponsavelService {
    constructor() {
        this.responsavelRepository = new responsavelRepository_1.ResponsavelRepository();
    }
    cadastrarResponsavel(responsavelData) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nome, email, senha } = responsavelData;
            const responsavel = new responsavelEntity_1.Responsavel(undefined, nome, email, senha);
            const novoResponsavel = yield this.responsavelRepository.insertUsuario(responsavel);
            console.log("Service - Insert", novoResponsavel);
            return novoResponsavel;
        });
    }
    atualizarResponsavel(responsavelData) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, nome, email, senha } = responsavelData;
            const responsavel = new responsavelEntity_1.Responsavel(id, nome, email, senha);
            yield this.responsavelRepository.updateUsuario(responsavel);
            console.log("Service - Update", responsavel);
            return responsavel;
        });
    }
    deletarResponsavel(responsavelData) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = responsavelData;
            const responsavel = new responsavelEntity_1.Responsavel(id);
            yield this.responsavelRepository.deleteUsuario(responsavel);
            console.log("Service - Delete", responsavel);
            return responsavel;
        });
    }
    filtrarResponsavelById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const responsavel = yield this.responsavelRepository.filterUsuarioById(id);
            console.log("Service - Filtrar", responsavel);
            return responsavel;
        });
    }
}
exports.ResponsavelService = ResponsavelService;
