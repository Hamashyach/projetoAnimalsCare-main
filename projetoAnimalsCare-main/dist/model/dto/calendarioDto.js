"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalendarioDto = void 0;
class CalendarioDto {
    constructor(id, data, tipoCompromisso, hora, observacao) {
        this.id = id;
        this.hora = hora;
        this.tipoCompromisso = tipoCompromisso;
        this.data = data;
        this.observacao = observacao;
    }
}
exports.CalendarioDto = CalendarioDto;
