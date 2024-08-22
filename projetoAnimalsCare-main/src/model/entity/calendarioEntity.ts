import { stringParaData, verificaFormatoData, verificaFormatoHora } from "../../util/DataUtil";

export class Calendario {
    id: number;
    data: Date;
    tipoCompromisso: string;
    hora: Date;
    observacao: string;

    constructor(id?: number, data?: Date | string, tipoCompromisso?: string, hora?: Date | string, observacao?: string) {
        const dataStr = typeof data === 'string' ? data : data instanceof Date ? data.toISOString().split('T')[0] : '';
        const horaStr = typeof hora === 'string' ? hora : hora instanceof Date ? hora.toTimeString().split(' ')[0].substring(0, 5) : '';

        this.validatesInformation(dataStr, tipoCompromisso || '', horaStr, observacao || '');
        this.id = id || 0;
        this.hora = stringParaData(horaStr);
        this.tipoCompromisso = tipoCompromisso || '';
        this.data = stringParaData(dataStr);
        this.observacao = observacao || '';
    }

    private validatesInformation(data: string, tipoCompromisso: string, hora: string, observacao: string) {
        let error = '';
        if (typeof data !== 'string' || typeof tipoCompromisso !== 'string' || typeof hora !== 'string' || typeof observacao !== 'string') {
            error += "Informações incompletas ou incorretas. ";
        }

        if (!verificaFormatoData(data)) {
            error += "A data deve possuir o formato: dd/MM/yyyy. ";
        }

        if (!verificaFormatoHora(hora)) {
            error += "A hora deve possuir o formato: hh:mm. ";
        }

        if (error !== '') {
            throw new Error(error);
        }
    }
}
