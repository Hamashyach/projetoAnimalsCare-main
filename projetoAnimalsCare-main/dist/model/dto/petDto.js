"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PetDto = void 0;
class PetDto {
    constructor(id, idResponsavel, nome, especie, raca, genero, idade, peso) {
        this.id = id;
        this.idResponsavel = idResponsavel;
        this.nome = nome;
        this.especie = especie;
        this.raca = raca;
        this.genero = genero;
        this.idade = idade;
        this.peso = peso;
    }
}
exports.PetDto = PetDto;
