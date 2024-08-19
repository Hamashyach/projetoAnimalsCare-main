export class CalendarioDto {
    dataVacinacao: string;
    tipoVacina: string;
    hora: string;

    constructor(dataVacinacao: string, tipoVacina: string, hora: string) {
        this.dataVacinacao = dataVacinacao;
        this.tipoVacina = tipoVacina;
        this.hora = hora;
    }
}
