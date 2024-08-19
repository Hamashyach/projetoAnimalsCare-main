export class CalendarioRequestDto {
    id?: string;
    dataVacinacao: string;
    tipoVacina: string;
    hora: string;

    constructor(id?: string, dataVacinacao?: string, tipoVacina?: string, hora?: string) {
        this.id = id || '';
        this.dataVacinacao = dataVacinacao || '';
        this.tipoVacina = tipoVacina || '';
        this.hora = hora || '';
    }
}
