export class CalendarioRequestDto{
    data: string;
    tipoCompromisso: string;
    hora: string;
    observacao: string;

    constructor(data?:string, tipoCompromisso?:string, hora?:string, observacao?: string){
        this.hora = (hora || ' ');
        this.tipoCompromisso = tipoCompromisso || '';
        this.data = (data || '');
        this.observacao = observacao || '';

    }
}