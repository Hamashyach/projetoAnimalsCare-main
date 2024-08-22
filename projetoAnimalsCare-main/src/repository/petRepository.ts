import { executarComandoSQL } from "../database/mysql";
import { Pet } from "../model/entity/petEntity";

export class PetRepository {

    constructor(){
        this.createTable();
    }

    private async createTable(){
        const query = `
        CREATE TABLE IF NOT EXISTS animalcare.DadosPet (
            id INT AUTO_INCREMENT PRIMARY KEY,
            idResponsavel INT NOT NULL,
            nome VARCHAR(255) NOT NULL,
            especie VARCHAR(255) NOT NULL,
            raca VARCHAR(255) NOT NULL,
            genero VARCHAR(255) NOT NULL,
            idade INT NOT NULL,
            peso INT NOT NULL
        )`;

        try {
            const resultado = await executarComandoSQL(query, []);
            console.log('Query executada com sucesso', resultado);
        } catch (err) {
            console.error('Error');
        }
    }

    async insertPet(pet: Pet):Promise<Pet>{
        const query ="INSERT INTO animalcare.DadosPet (idResponsavel, nome, especie, raca, genero, idade, peso) VALUES (?, ? ,?, ?, ?, ?)";

        try {
            const resultado = await executarComandoSQL (query, [pet.idResponsavel, pet.nome, pet.especie, pet.raca, pet.genero, pet.idade, pet.peso]);
            console.log('Pet inserido com sucesso, ID: ', resultado.insertId);
            pet.id = resultado.insertId;
            return new Promise<Pet>((resolve)=> {
                resolve(pet);
            })
        } catch (err) {
            console.error('Erro ao inserir o pet', err);
            throw err;
        }
    }

    async updatePet (pet:Pet):Promise<Pet>{
        const query ="UPDATE animalcare.DadosPet set idResponsavel = ?, nome = ?, especie = ?, raca = ?, genero = ?, idade = ?, peso= ? where id = ?";

        try {
            const resultado = await executarComandoSQL(query, [pet.nome, pet.especie, pet.raca, pet.genero, pet.idade, pet.peso, pet.id]);
            console.log('Pet atualizado com sucesso, ID ', resultado);
            return new Promise<Pet>((resolve)=>{
                resolve(pet);
            })
        } catch (err:any) {
            console.error(`Erro ao atualizar pet de ID ${pet.id} gerando o erro: ${err}`);
            throw err;
        }
    }

    async deletePet(pet:Pet):Promise<Pet>{
        const query = "DELETE FROM animalcare.DadosPet where id = ?;";

        try {
            const resultado = await executarComandoSQL(query, [pet.id]);
            console.log('Pet deletado com sucesso: ', pet);
            return new Promise<Pet>((resolve)=>{
                resolve(pet);
            })
        } catch (err:any) {
            console.error(`Falha ao deletar o pet de ID ${pet.id} gerando o erro: ${err}`);
            throw err;
        }
    }

    async filterPetById(id: number): Promise<Pet>{
        const query = 'Select * From animalcare.DadosPet where id = ?';

        try{
            const resultado = await executarComandoSQL(query, [id]);
            console.log('Pet localizado com sucesso, ID: ', resultado);
            return new Promise<Pet>((resolve)=>{
                resolve(resultado);
            })
        }catch (err: any) {
            console.error(`Falha ao procurar o Pet de ID ${id} gerando o erro: ${err}`);
            throw err;
        }
    }
}