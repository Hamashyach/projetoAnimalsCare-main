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
exports.ResponsavelRepository = void 0;
const mysql_1 = require("../database/mysql");
class ResponsavelRepository {
    constructor() {
        this.createTable();
    }
    createTable() {
        return __awaiter(this, void 0, void 0, function* () {
            const query = `
        CREATE TABLE IF NOT EXISTS DadosResponsavel (
            id INT AUTO_INCREMENT PRIMARY KEY,
            nome VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL UNIQUE,
            senha VARCHAR(255) NOT NULL
        )`;
            try {
                const resultado = yield (0, mysql_1.executarComandoSQL)(query, []);
                console.log('Tabela de responsável criada com sucesso', resultado);
            }
            catch (err) {
                console.error('Erro ao criar tabela de responsável:', err);
            }
        });
    }
    insertUsuario(responsavel) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "INSERT INTO DadosResponsavel (nome, email, senha) VALUES (?, ?, ?)";
            try {
                const resultado = yield (0, mysql_1.executarComandoSQL)(query, [responsavel.nome, responsavel.email, responsavel.senha]);
                console.log('Responsável inserido com sucesso, ID:', resultado.insertId);
                responsavel.id = resultado.insertId;
                return responsavel;
            }
            catch (err) {
                console.error('Erro ao inserir responsável:', err);
                throw err;
            }
        });
    }
    updateUsuario(responsavel) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "UPDATE DadosResponsavel SET nome = ?, email = ?, senha = ? WHERE id = ?";
            try {
                yield (0, mysql_1.executarComandoSQL)(query, [responsavel.nome, responsavel.email, responsavel.senha, responsavel.id]);
                console.log('Responsável atualizado com sucesso, ID:', responsavel.id);
                return responsavel;
            }
            catch (err) {
                console.error('Erro ao atualizar responsável:', err);
                throw err;
            }
        });
    }
    deleteUsuario(responsavel) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "DELETE FROM DadosResponsavel WHERE id = ?";
            try {
                yield (0, mysql_1.executarComandoSQL)(query, [responsavel.id]);
                console.log('Responsável deletado com sucesso, ID:', responsavel.id);
                return responsavel;
            }
            catch (err) {
                console.error('Erro ao deletar responsável:', err);
                throw err;
            }
        });
    }
    filterUsuarioById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "SELECT * FROM DadosResponsavel WHERE id = ?";
            try {
                const resultado = yield (0, mysql_1.executarComandoSQL)(query, [id]);
                console.log('Responsável localizado com sucesso, ID:', id);
                return resultado[0];
            }
            catch (err) {
                console.error('Erro ao procurar responsável por ID:', err);
                throw err;
            }
        });
    }
}
exports.ResponsavelRepository = ResponsavelRepository;
