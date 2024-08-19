export class PetDto {
    id: number;
    nome: string;
    especie: string;
    raca: string;
    genero: string;
    idade: number;
    peso: number;

    constructor(id: number, nome: string, especie: string, raca: string, genero: string, idade: number, peso: number) {
        this.id = id;
        this.nome = nome;
        this.especie = especie;
        this.raca = raca;
        this.genero = genero;
        this.idade = idade;
        this.peso = peso;
    }
}
