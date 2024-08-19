"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PetRequestDto = void 0;
class PetRequestDto {
    constructor(id, nome, especie, raca, genero, idade, peso) {
        this.id = id || 0;
        this.nome = nome || '';
        this.especie = especie || '';
        this.raca = raca || '';
        this.genero = genero || '';
        this.idade = idade || 0;
        this.peso = peso || 0;
    }
}
exports.PetRequestDto = PetRequestDto;
