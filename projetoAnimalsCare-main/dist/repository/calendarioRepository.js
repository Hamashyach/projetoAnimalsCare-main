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
exports.CalendarioRepository = void 0;
const mysql_1 = require("../database/mysql");
class CalendarioRepository {
    constructor() {
        this.createTable();
    }
    createTable() {
        return __awaiter(this, void 0, void 0, function* () {
            const query = `
        CREATE TABLE IF NOT EXISTS DadosCalendario (
            id INT AUTO_INCREMENT PRIMARY KEY,
            dataVacinacao DATE NOT NULL,
            tipoVacina VARCHAR(255) NOT NULL,
            hora TIME NOT NULL
        )`;
            try {
                const resultado = yield (0, mysql_1.executarComandoSQL)(query, []);
                console.log('Tabela de calendário criada com sucesso', resultado);
            }
            catch (err) {
                console.error('Erro ao criar tabela de calendário:', err);
            }
        });
    }
    insertData(calendario) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "INSERT INTO DadosCalendario (dataVacinacao, tipoVacina, hora) VALUES (?, ?, ?)";
            try {
                const resultado = yield (0, mysql_1.executarComandoSQL)(query, [calendario.dataVacinacao, calendario.tipoVacina, calendario.hora]);
                console.log('Vacinação inserida com sucesso, ID:', resultado.insertId);
                calendario.id = resultado.insertId;
                return calendario;
            }
            catch (err) {
                console.error('Erro ao inserir vacinação:', err);
                throw err;
            }
        });
    }
    updateData(calendario) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "UPDATE DadosCalendario SET dataVacinacao = ?, tipoVacina = ?, hora = ? WHERE id = ?";
            try {
                yield (0, mysql_1.executarComandoSQL)(query, [calendario.dataVacinacao, calendario.tipoVacina, calendario.hora, calendario.id]);
                console.log('Vacinação atualizada com sucesso, ID:', calendario.id);
                return calendario;
            }
            catch (err) {
                console.error('Erro ao atualizar vacinação:', err);
                throw err;
            }
        });
    }
    deleteData(calendario) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "DELETE FROM DadosCalendario WHERE id = ?";
            try {
                yield (0, mysql_1.executarComandoSQL)(query, [calendario.id]);
                console.log('Vacinação deletada com sucesso, ID:', calendario.id);
                return calendario;
            }
            catch (err) {
                console.error('Erro ao deletar vacinação:', err);
                throw err;
            }
        });
    }
    filterDataById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "SELECT * FROM DadosCalendario WHERE id = ?";
            try {
                const resultado = yield (0, mysql_1.executarComandoSQL)(query, [id]);
                console.log('Vacinação localizada com sucesso, ID:', id);
                return resultado[0];
            }
            catch (err) {
                console.error('Erro ao procurar vacinação por ID:', err);
                throw err;
            }
        });
    }
}
exports.CalendarioRepository = CalendarioRepository;
