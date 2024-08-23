export class CalendarioDto{
    id: number;
    data: string;
    tipoCompromisso: string;
    hora: string;
    observacao: string;

    constructor(id: any, data: any, tipoCompromisso: any, hora: any, observacao: any){
        this.id = id;
        this.hora = hora;
        this.tipoCompromisso = tipoCompromisso;
        this.data = data;
        this.observacao = observacao;
    }
}
