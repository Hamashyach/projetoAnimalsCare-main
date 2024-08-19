import { stringParaData, verificaFormatoData } from "../../util/DataUtil";

export class Calendario {
    id: number;
    dataVacinacao: Date;
    tipoVacina: string;
    hora: Date;

    constructor(id?: number, dataVacinacao?: Date, tipoVacina?: string, hora?: Date) {

        const dataVacinacaoStr = dataVacinacao ? dataVacinacao.toISOString().split('T')[0] : '';
        const horaStr = hora ? hora.toTimeString().split(' ')[0].substring(0, 5) : '';

        this.validatesInformation(dataVacinacaoStr, tipoVacina || '', horaStr);
        this.id = id || 0;
        this.hora = stringParaData(horaStr);
        this.tipoVacina = tipoVacina || '';
        this.dataVacinacao = stringParaData(dataVacinacaoStr);
    }

    private validatesInformation(dataVacinacao: string, tipoVacina: string, hora: string) {
        let error = '';
        if (typeof dataVacinacao !== 'string' || typeof tipoVacina !== 'string' || typeof hora !== 'string') {
            error += "Informações incompletas ou incorretas. ";
        }

        if (!verificaFormatoData(dataVacinacao)) {
            error += "A data deve possuir o formato: dd/MM/yyyy. ";
        }

        if (!verificaFormatoData(hora)) {
            error += "A hora deve possuir o formato: hh:mm. ";
        }

        if (error !== '') {
            throw new Error(error);
        }
    }
}




