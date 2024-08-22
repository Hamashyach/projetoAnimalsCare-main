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
        CREATE TABLE IF NOT EXISTS animalcare.DadosResponsavel (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL,
            senha VARCHAR(255) NOT NULL
            )`;
            try {
                const resultado = yield (0, mysql_1.executarComandoSQL)(query, []);
                console.log('query executada com sucesso', resultado);
            }
            catch (err) {
                console.error('error');
            }
        });
    }
    insertUsuario(responsavel) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "INSERT INTO animalcare.dadosresponsavel (name, email, senha) VALUES (?, ?, ?)";
            try {
                const resultado = yield (0, mysql_1.executarComandoSQL)(query, [responsavel.name, responsavel.email, responsavel.senha]);
                console.log('Usuario inserido com sucesso, ID: ', resultado.isertid);
                responsavel.id = resultado.insertId;
                return new Promise((resolve) => {
                    resolve(responsavel);
                });
            }
            catch (err) {
                console.error('erro ao inserir usuário', err);
                throw err;
            }
        });
    }
    updateUsuario(responsavel) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = 'UPDATE animalcare.DadosResponsavel set name = ?, email = ?, senha = ? where id = ?';
            try {
                const resultado = yield (0, mysql_1.executarComandoSQL)(query, [responsavel.name, responsavel.email, responsavel.senha, responsavel.id]);
                console.log('Usuario atualizado com sucesso, ID', resultado);
                return new Promise((resolve) => {
                    resolve(responsavel);
                });
            }
            catch (err) {
                console.error(`Erro ao atualizar usuário de ID ${responsavel.id} gerando o erro: ${err}`);
                throw err;
            }
        });
    }
    deleteUsuario(responsavel) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "DELETE FROM animalcare.DadosReponsavel where id = ?;";
            try {
                const resultado = yield (0, mysql_1.executarComandoSQL)(query, [responsavel.id]);
                console.log('Usuário deletado com sucesso: ', resultado);
                return new Promise((resolve) => {
                    resolve(responsavel);
                });
            }
            catch (err) {
                console.error(`Falha ao deletar o usuario de ID ${responsavel.id} gerando o erro: ${err}`);
                throw err;
            }
        });
    }
    filterUsuarioById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "SELECT * FROM animalcare.DadosResponsavel where id = ?";
            try {
                const resultado = yield (0, mysql_1.executarComandoSQL)(query, [id]);
                console.log('usuario localizado com sucesso, ID: ', resultado);
                return new Promise((resolve) => {
                    resolve(resultado);
                });
            }
            catch (err) {
                console.error(`Falha ao procurar usuarip de ID ${id} gerando o erro: ${err}`);
                throw err;
            }
        });
    }
}
exports.ResponsavelRepository = ResponsavelRepository;
