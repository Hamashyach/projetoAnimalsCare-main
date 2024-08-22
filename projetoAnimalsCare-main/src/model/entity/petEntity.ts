export class Pet{
    id: number;
    idResponsavel: number;
    nome: string;
    especie: string;
    raca: string;
    genero: string;
    idade: number;
    peso: number;

    constructor(id?:number, idResponsavel?: number, nome?:string, especie?:string, raca?: string, genero?:string, idade?: number, peso?: number){
        this.validatesInformation(idResponsavel, nome, especie, raca, genero, idade, peso);
        this. id = id || 0;
        this.idResponsavel = idResponsavel || 0;
        this.nome = nome || '';
        this.especie = especie || '';
        this.raca = raca || '';
        this.genero = genero || '';
        this.idade = idade || 0;
        this.peso = peso || 0;

        }

        private validatesInformation(idResponsavel: any, nome:any, especie:any, raca:any, genero: any, idade:any, peso:any){
            let error = '';
            if (typeof idResponsavel !== 'number' || typeof nome !== 'string' || typeof especie !== 'string' || typeof raca !== 'string' || typeof genero !== 'string' || typeof idade !== 'number' || typeof peso !== 'number'){
                error += ("Informações incompletas ou incorretas. ");
            }
            if(error != ''){
                throw new Error(error);
            }
        }
    }
