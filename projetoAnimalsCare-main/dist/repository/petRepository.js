"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PetRepository = void 0;
const mysql_1 = require("../database/mysql");
class PetRepository {
    constructor() {
        this.createTable();
    }
    createTable() {
        return __awaiter(this, void 0, void 0, function* () {
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
                const resultado = yield (0, mysql_1.executarComandoSQL)(query, []);
                console.log('Query executada com sucesso', resultado);
            }
            catch (err) {
                console.error('Error');
            }
        });
    }
    insertPet(pet) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "INSERT INTO animalcare.DadosPet (idResponsavel, nome, especie, raca, genero, idade, peso) VALUES (?, ? ,?, ?, ?, ?)";
            try {
                const resultado = yield (0, mysql_1.executarComandoSQL)(query, [pet.idResponsavel, pet.nome, pet.especie, pet.raca, pet.genero, pet.idade, pet.peso]);
                console.log('Pet inserido com sucesso, ID: ', resultado.insertId);
                pet.id = resultado.insertId;
                return new Promise((resolve) => {
                    resolve(pet);
                });
            }
            catch (err) {
                console.error('Erro ao inserir o pet', err);
                throw err;
            }
        });
    }
    updatePet(pet) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "UPDATE animalcare.DadosPet set isResponsavel = ?, nome = ?, especie = ?, raca = ?, genero = ?, idade = ?, peso= ? where id = ?";
            try {
                const resultado = yield (0, mysql_1.executarComandoSQL)(query, [pet.nome, pet.especie, pet.raca, pet.genero, pet.idade, pet.peso, pet.id]);
                console.log('Pet atualizado com sucesso, ID ', resultado);
                return new Promise((resolve) => {
                    resolve(pet);
                });
            }
            catch (err) {
                console.error(`Erro ao atualizar pet de ID ${pet.id} gerando o erro: ${err}`);
                throw err;
            }
        });
    }
    deletePet(pet) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "DELETE FROM animalcare.DadosPet where id = ?;";
            try {
                const resultado = yield (0, mysql_1.executarComandoSQL)(query, [pet.id]);
                console.log('Pet deletado com sucesso: ', pet);
                return new Promise((resolve) => {
                    resolve(pet);
                });
            }
            catch (err) {
                console.error(`Falha ao deletar o pet de ID ${pet.id} gerando o erro: ${err}`);
                throw err;
            }
        });
    }
    filterPetById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = 'Select * From animalcare.DadosPet where id = ?';
            try {
                const resultado = yield (0, mysql_1.executarComandoSQL)(query, [id]);
                console.log('Pet localizado com sucesso, ID: ', resultado);
                return new Promise((resolve) => {
                    resolve(resultado);
                });
            }
            catch (err) {
                console.error(`Falha ao procurar o Pet de ID ${id} gerando o erro: ${err}`);
                throw err;
            }
        });
    }
}
exports.PetRepository = PetRepository;
