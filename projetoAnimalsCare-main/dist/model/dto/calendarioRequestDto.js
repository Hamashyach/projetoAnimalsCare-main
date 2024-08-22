"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalendarioRequestDto = void 0;
class CalendarioRequestDto {
    constructor(data, tipoCompromisso, hora, observacao) {
        this.hora = (hora || ' ');
        this.tipoCompromisso = tipoCompromisso || '';
        this.data = (data || '');
        this.observacao = observacao || '';
    }
}
exports.CalendarioRequestDto = CalendarioRequestDto;
