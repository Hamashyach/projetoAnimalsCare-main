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
    cadastarResponsavel(responsavelData) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, email, senha } = responsavelData;
            const resposavel = new responsavelEntity_1.Responsavel(undefined, name, email, senha);
            const novoResponsavel = yield this.responsavelRepository.insertUsuario(resposavel);
            console.log("Service - Insert", novoResponsavel);
            return novoResponsavel;
        });
    }
    atualizarResponsavel(responsavelData) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, name, email, senha } = responsavelData;
            const responsavel = new responsavelEntity_1.Responsavel(id, name, email, senha);
            yield this.responsavelRepository.updateUsuario(responsavel);
            console.log("Service - Update", responsavel);
            return responsavel;
        });
    }
    deletarresponsavel(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const responsavelExiste = yield this.responsavelRepository.filterUsuarioById(id);
            if (!responsavelExiste) {
                throw new Error(`Responsavel com ID ${id} não existe`);
            }
            yield this.responsavelRepository.deleteUsuario(responsavelExiste);
        });
    }
    filtrarResponsavelById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.responsavelRepository.filterUsuarioById(id);
        });
    }
}
exports.ResponsavelService = ResponsavelService;
