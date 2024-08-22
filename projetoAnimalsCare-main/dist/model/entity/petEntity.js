"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pet = void 0;
class Pet {
    constructor(id, idResponsavel, nome, especie, raca, genero, idade, peso) {
        this.validatesInformation(idResponsavel, nome, especie, raca, genero, idade, peso);
        this.id = id || 0;
        this.idResponsavel = idResponsavel || 0;
        this.nome = nome || '';
        this.especie = especie || '';
        this.raca = raca || '';
        this.genero = genero || '';
        this.idade = idade || 0;
        this.peso = peso || 0;
    }
    validatesInformation(idResponsavel, nome, especie, raca, genero, idade, peso) {
        let error = '';
        if (typeof idResponsavel !== 'number' || typeof nome !== 'string' || typeof especie !== 'string' || typeof raca !== 'string' || typeof genero !== 'string' || typeof idade !== 'number' || typeof peso !== 'number') {
            error += ("Informações incompletas ou incorretas. ");
        }
        if (error != '') {
            throw new Error(error);
        }
    }
}
exports.Pet = Pet;
