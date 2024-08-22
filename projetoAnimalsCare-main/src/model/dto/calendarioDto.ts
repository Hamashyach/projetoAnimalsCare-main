export class CalendarioDto{
    data: string;
    tipoCompromisso: string;
    hora: string;
    observacao: string;

    constructor(data: any, tipoCompromisso: any, hora: any, observacao: any){
        this.hora = hora;
        this.tipoCompromisso = tipoCompromisso;
        this.data = data;
        this.observacao = observacao;
    }
}
