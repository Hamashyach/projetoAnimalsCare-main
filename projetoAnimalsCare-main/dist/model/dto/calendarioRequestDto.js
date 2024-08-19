"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalendarioRequestDto = void 0;
class CalendarioRequestDto {
    constructor(id, dataVacinacao, tipoVacina, hora) {
        this.id = id || '';
        this.dataVacinacao = dataVacinacao || '';
        this.tipoVacina = tipoVacina || '';
        this.hora = hora || '';
    }
}
exports.CalendarioRequestDto = CalendarioRequestDto;
