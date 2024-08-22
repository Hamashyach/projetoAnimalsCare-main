"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalendarioDto = void 0;
class CalendarioDto {
    constructor(data, tipoCompromisso, hora, observacao) {
        this.hora = hora;
        this.tipoCompromisso = tipoCompromisso;
        this.data = data;
        this.observacao = observacao;
    }
}
exports.CalendarioDto = CalendarioDto;
