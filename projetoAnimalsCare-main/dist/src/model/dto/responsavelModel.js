"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Responsavel = void 0;
class Responsavel {
    constructor(id, nome, email, senha) {
        this.validatesInformation(nome, email, senha);
        this.id = id || 0;
        this.nome = nome || '';
        this.email = email || '';
        this.senha = senha || '';
    }
    validatesInformation(nome, email, senha) {
        let error = '';
        if (typeof nome !== 'string' || typeof email !== 'number' || typeof senha !== 'string') {
            error += ("informações incompletas ou incorretas");
        }
        if (error != '') {
            throw new Error(error);
        }
    }
}
exports.Responsavel = Responsavel;
