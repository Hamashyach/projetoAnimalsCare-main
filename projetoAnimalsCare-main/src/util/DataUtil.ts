export function verificaFormatoData(dataString: string): boolean {
    const regex = /^\d{2}\/\d{2}\/\d{4}$/;
    return regex.test(dataString);
}

export function stringParaData(dataString: string): Date {
    const partes = dataString.split('/');
    const dia = parseInt(partes[0], 10);
    const mes = parseInt(partes[1], 10) - 1; // Meses começam do 0
    const ano = parseInt(partes[2], 10);

    const data = new Date(ano, mes, dia);

    if (isNaN(data.getTime())) {
        throw new Error("Data inválida");
    }
    return data;
}

export function calculaDiferencaDiasEntreDatas(menorData: Date, maiorData: Date): number {
    const umDia = 1000 * 60 * 60 * 24;
    const diferencaMillis = maiorData.getTime() - menorData.getTime();
    return Math.floor(diferencaMillis / umDia);
    }
    
    export function verificaFormatoHora(horaString: string): boolean {
        const regex = /^\d{2}:\d{2}$/;
        return regex.test(horaString);
}
    

