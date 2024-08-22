export class PetDto{
    id: number;
    idResponsavel: number;
    nome: string;
    especie: string;
    raca: string;
    genero: string;
    idade: number;
    peso: number;

    constructor(id: any,idResponsavel: any, nome: any, especie: any, raca: any, genero: any, idade: any, peso: any){
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