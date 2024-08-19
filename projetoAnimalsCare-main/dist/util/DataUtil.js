"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verificaFormatoData = verificaFormatoData;
exports.stringParaData = stringParaData;
exports.calculaDiferencaDiasEntreDatas = calculaDiferencaDiasEntreDatas;
function verificaFormatoData(dataString) {
    const regex = /^\d{2}\/\d{2}\/\d{4}$/;
    return regex.test(dataString);
}
function stringParaData(dataString) {
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
function calculaDiferencaDiasEntreDatas(menorData, maiorData) {
    const umDia = 1000 * 60 * 60 * 24;
    const diferencaMillis = maiorData.getTime() - menorData.getTime();
    return Math.floor(diferencaMillis / umDia);
}
