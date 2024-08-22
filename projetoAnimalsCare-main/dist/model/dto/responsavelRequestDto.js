"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponsavelRequestDto = void 0;
class ResponsavelRequestDto {
    constructor(name, email, senha) {
        this.name = name || '';
        this.email = email || '';
        this.senha = senha || '';
    }
}
exports.ResponsavelRequestDto = ResponsavelRequestDto;
