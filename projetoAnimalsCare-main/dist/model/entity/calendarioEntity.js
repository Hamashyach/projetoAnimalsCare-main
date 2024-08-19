"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calendario = void 0;
const DataUtil_1 = require("../../util/DataUtil");
class Calendario {
    constructor(id, dataVacinacao, tipoVacina, hora) {
        const dataVacinacaoStr = dataVacinacao ? dataVacinacao.toISOString().split('T')[0] : '';
        const horaStr = hora ? hora.toTimeString().split(' ')[0].substring(0, 5) : '';
        this.validatesInformation(dataVacinacaoStr, tipoVacina || '', horaStr);
        this.id = id || 0;
        this.hora = (0, DataUtil_1.stringParaData)(horaStr);
        this.tipoVacina = tipoVacina || '';
        this.dataVacinacao = (0, DataUtil_1.stringParaData)(dataVacinacaoStr);
    }
    validatesInformation(dataVacinacao, tipoVacina, hora) {
        let error = '';
        if (typeof dataVacinacao !== 'string' || typeof tipoVacina !== 'string' || typeof hora !== 'string') {
            error += "Informações incompletas ou incorretas. ";
        }
        if (!(0, DataUtil_1.verificaFormatoData)(dataVacinacao)) {
            error += "A data deve possuir o formato: dd/MM/yyyy. ";
        }
        if (!(0, DataUtil_1.verificaFormatoData)(hora)) {
            error += "A hora deve possuir o formato: hh:mm. ";
        }
        if (error !== '') {
            throw new Error(error);
        }
    }
}
exports.Calendario = Calendario;
