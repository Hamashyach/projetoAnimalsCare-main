"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calendario = void 0;
const DataUtil_1 = require("../../util/DataUtil");
class Calendario {
    constructor(id, data, tipoCompromisso, hora, observacao) {
        const dataStr = typeof data === 'string' ? data : data instanceof Date ? data.toISOString().split('T')[0] : '';
        const horaStr = typeof hora === 'string' ? hora : hora instanceof Date ? hora.toTimeString().split(' ')[0].substring(0, 5) : '';
        this.validatesInformation(dataStr, tipoCompromisso || '', horaStr, observacao || '');
        this.id = id || 0;
        this.hora = (0, DataUtil_1.stringParaData)(horaStr);
        this.tipoCompromisso = tipoCompromisso || '';
        this.data = (0, DataUtil_1.stringParaData)(dataStr);
        this.observacao = observacao || '';
    }
    validatesInformation(data, tipoCompromisso, hora, observacao) {
        let error = '';
        if (typeof data !== 'string' || typeof tipoCompromisso !== 'string' || typeof hora !== 'string' || typeof observacao !== 'string') {
            error += "Informações incompletas ou incorretas. ";
        }
        if (!(0, DataUtil_1.verificaFormatoData)(data)) {
            error += "A data deve possuir o formato: dd/MM/yyyy. ";
        }
        if (!(0, DataUtil_1.verificaFormatoHora)(hora)) {
            error += "A hora deve possuir o formato: hh:mm. ";
        }
        if (error !== '') {
            throw new Error(error);
        }
    }
}
exports.Calendario = Calendario;
