import { Pet } from "../model/entity/petEntity";
import { executarComandoSQL } from "../database/mysql";

export class PetRepository {
    constructor() {
        this.createTable();
    }

    private async createTable() {
        const query = `
        CREATE TABLE IF NOT EXISTS DadosPet (
            id INT AUTO_INCREMENT PRIMARY KEY,
            nome VARCHAR(255) NOT NULL,
            especie VARCHAR(255) NOT NULL,
            raca VARCHAR(255) NOT NULL,
            genero VARCHAR(255) NOT NULL,
            idade INT NOT NULL,
            peso INT NOT NULL
        )`;

        try {
            const resultado = await executarComandoSQL(query, []);
            console.log('Tabela de pet criada com sucesso', resultado);
        } catch (err) {
            console.error('Erro ao criar tabela de pet:', err);
        }
    }

    async insertPet(pet: Pet): Promise<Pet> {
        const query = "INSERT INTO DadosPet (nome, especie, raca, genero, idade, peso) VALUES (?, ?, ?, ?, ?, ?)";

        try {
            const resultado = await executarComandoSQL(query, [pet.nome, pet.especie, pet.raca, pet.genero, pet.idade, pet.peso]);
            console.log('Pet inserido com sucesso, ID:', resultado.insertId);
            pet.id = resultado.insertId;
            return pet;
        } catch (err) {
            console.error('Erro ao inserir pet:', err);
            throw err;
        }
    }

    async updatePet(pet: Pet): Promise<Pet> {
        const query = "UPDATE DadosPet SET nome = ?, especie = ?, raca = ?, genero = ?, idade = ?, peso = ? WHERE id = ?";

        try {
            await executarComandoSQL(query, [pet.nome, pet.especie, pet.raca, pet.genero, pet.idade, pet.peso, pet.id]);
            console.log('Pet atualizado com sucesso, ID:', pet.id);
            return pet;
        } catch (err) {
            console.error('Erro ao atualizar pet:', err);
            throw err;
        }
    }

    async deletePet(pet: Pet): Promise<Pet> {
        const query = "DELETE FROM DadosPet WHERE id = ?";

        try {
            await executarComandoSQL(query, [pet.id]);
            console.log('Pet deletado com sucesso, ID:', pet.id);
            return pet;
        } catch (err) {
            console.error('Erro ao deletar pet:', err);
            throw err;
        }
    }

    async filterPetById(id: number): Promise<Pet> {
        const query = "SELECT * FROM DadosPet WHERE id = ?";

        try {
            const resultado = await executarComandoSQL(query, [id]);
            console.log('Pet localizado com sucesso, ID:', id);
            return resultado[0];
        } catch (err) {
            console.error('Erro ao procurar pet por ID:', err);
            throw err;
        }
    }
}
