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
exports.CalendarioService = void 0;
const calendarioEntity_1 = require("../model/entity/calendarioEntity");
const calendarioRepository_1 = require("../repository/calendarioRepository");
class CalendarioService {
    constructor() {
        this.calendarioRepository = new calendarioRepository_1.CalendarioRepository();
    }
    cadastrarData(calendarioData) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data, tipoCompromisso, hora, observacao } = calendarioData;
            const calendario = new calendarioEntity_1.Calendario(undefined, data, tipoCompromisso, hora, observacao);
            const novaData = yield this.calendarioRepository.insertData(calendario);
            console.log("Service - Insert", novaData);
            return novaData;
        });
    }
    atualizarData(calendarioData) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, data, tipoCompromisso, hora, observacao } = calendarioData;
            const calendario = new calendarioEntity_1.Calendario(id, data, tipoCompromisso, hora, observacao);
            yield this.calendarioRepository.updateData(calendario);
            console.log("Service - Update", calendario);
            return calendario;
        });
    }
    deletarData(calendarioData) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, data, tipoCompromisso, hora, observacao } = calendarioData;
            const calendario = new calendarioEntity_1.Calendario(id, data, tipoCompromisso, hora, observacao);
            yield this.calendarioRepository.deleteData(calendario);
            console.log("Service - Delete", calendario);
            return calendario;
        });
    }
    filtrarDataById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.calendarioRepository.filterDataById(id);
        });
    }
    listarTodasDatas() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.calendarioRepository.filterAllDatas();
        });
    }
}
exports.CalendarioService = CalendarioService;
