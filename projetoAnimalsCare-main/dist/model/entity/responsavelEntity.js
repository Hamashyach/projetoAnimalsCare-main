"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Responsavel = void 0;
class Responsavel {
    constructor(id, name, email, senha) {
        this.validatesInformation(name, email, senha);
        this.id = id || 0;
        this.name = name || '';
        this.email = email || '';
        this.senha = senha || '';
    }
    validatesInformation(name, email, senha) {
        let error = '';
        if (typeof name !== 'string' || typeof email !== 'string' || typeof senha !== 'string') {
            error += ("informações incompletas ou incorretas");
        }
        if (error != '') {
            throw new Error(error);
        }
    }
}
exports.Responsavel = Responsavel;
