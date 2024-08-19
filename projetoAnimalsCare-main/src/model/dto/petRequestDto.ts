export class PetRequestDto {
    id: number;
    nome: string;
    especie: string;
    raca: string;
    genero: string;
    idade: number;
    peso: number;

    constructor(id?: number, nome?: string, especie?: string, raca?: string, genero?: string, idade?: number, peso?: number) {
        this.id = id || 0;
        this.nome = nome || '';
        this.especie = especie || '';
        this.raca = raca || '';
        this.genero = genero || '';
        this.idade = idade || 0;
        this.peso = peso || 0;
    }
}
