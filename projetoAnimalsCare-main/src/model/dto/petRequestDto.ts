export class PetRequestDto{
    idResponsavel: number;
    nome: string;
    especie: string;
    raca: string;
    genero: string;
    idade: number;
    peso: number;

    constructor(idResponsavel?: number, nome?:string, especie?:string, raca?: string, genero?: string, idade?: number, peso?: number){
        this.idResponsavel = idResponsavel || 0;
        this.nome = nome || '';
        this.especie = especie || '';
        this.raca = raca || '';
        this.genero = genero || '';
        this.idade = idade || 0;
        this.peso = peso || 0;

        }
}