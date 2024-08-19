"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponsavelRequestDto = void 0;
class ResponsavelRequestDto {
    constructor(id, nome, email, senha) {
        this.id = id || 0;
        this.nome = nome || '';
        this.email = email || '';
        this.senha = senha || '';
    }
}
exports.ResponsavelRequestDto = ResponsavelRequestDto;
