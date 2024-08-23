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
            data DATE NOT NULL,
            tipoCompromisso VARCHAR(255) NOT NULL,
            hora DATE NOT NULL ,
            observacao VARCHAR(255) 
            )`;
            try {
                const resultado = yield (0, mysql_1.executarComandoSQL)(query, []);
                console.log('Query executada com sucesso', resultado);
            }
            catch (err) {
                console.error('Error');
            }
        });
    }
    insertData(calendario) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "INSERT INTO DadosCalendario (data, tipoCompromisso, hora, observacao) VALUES (?, ?, ?, ?)";
            try {
                const resultado = yield (0, mysql_1.executarComandoSQL)(query, [calendario.data, calendario.tipoCompromisso, calendario.hora, calendario.observacao]);
                console.log('Compromisso inserido com sucesso, ID ', resultado.insertId);
                calendario.id = resultado.insertId;
                return new Promise((resolve) => {
                    resolve(calendario);
                });
            }
            catch (err) {
                console.log('Erro ao inserir compromisso');
                throw err;
            }
        });
    }
    updateData(calendario) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "UPDATE DadosCalendario SET data = ?, tipoCompromisso = ?, hora = ?, observacao = ? where id = ? ";
            try {
                const resultado = yield (0, mysql_1.executarComandoSQL)(query, [calendario.data, calendario.tipoCompromisso, calendario.hora, calendario.observacao, calendario.id]);
                console.log('Data atualizada com sucesso, ID ', resultado);
                return calendario;
            }
            catch (err) {
                console.error(`Erro ao atualizar data de ID ${calendario.id} gerando o erro: ${err}`);
                throw err;
            }
        });
    }
    deleteData(calendario) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "DELETE FROM DadosCalendario where id = ?";
            try {
                yield (0, mysql_1.executarComandoSQL)(query, [calendario.id]);
                console.log('Data deletada com sucesso: ', calendario.id);
                return calendario;
            }
            catch (err) {
                console.error(`Falha ao deletar data de id ${calendario.id} gerando o erro: ${err}`);
                throw err;
            }
        });
    }
    filterDataById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "SELECT * FROM DadosCalendario where id = ?";
            try {
                const resultado = yield (0, mysql_1.executarComandoSQL)(query, [id]);
                if (resultado.length > 0) {
                    return resultado[0];
                }
                return null;
            }
            catch (err) {
                console.error(`Erro ao buscar data de ID ${id}:`, err);
                throw err;
            }
        });
    }
    filterAllDatas() {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "SELECT * FROM DadosCalendario";
            try {
                const resultado = yield (0, mysql_1.executarComandoSQL)(query, []);
                console.log('Todas as datas foram listadas com sucesso');
                return resultado;
            }
            catch (err) {
                console.error('Erro ao listar todas as datas:', err);
                throw err;
            }
        });
    }
}
exports.CalendarioRepository = CalendarioRepository;
