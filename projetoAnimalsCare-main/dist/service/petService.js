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
exports.PetService = void 0;
const petEntity_1 = require("../model/entity/petEntity");
const petRepository_1 = require("../repository/petRepository");
const responsavelRepository_1 = require("../repository/responsavelRepository");
class PetService {
    constructor() {
        this.petRepository = new petRepository_1.PetRepository();
        this.responsavelRepository = new responsavelRepository_1.ResponsavelRepository();
    }
    cadastarPet(petData) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idResponsavel, nome, especie, raca, genero, idade, peso } = petData;
            const pets = yield this.responsavelRepository.filterUsuarioById(idResponsavel);
            if (!pets) {
                throw new Error('Usuario com ID ${idResponsavel} não encontrado');
            }
            const pet = new petEntity_1.Pet(undefined, idResponsavel, nome, especie, raca, genero, idade, peso);
            return yield this.petRepository.insertPet(pet);
        });
    }
    atualizarPet(petData) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, idResponsavel, nome, especie, raca, genero, idade, peso } = petData;
            const pet = new petEntity_1.Pet(id, idResponsavel, nome, especie, raca, genero, idade, peso);
            yield this.petRepository.updatePet(pet);
            return pet;
        });
    }
    deletarPet(petData) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, idResponsavel, nome, especie, raca, genero, idade, peso } = petData;
            const pet = new petEntity_1.Pet(id, idResponsavel, nome, especie, raca, genero, idade, peso);
            return pet;
        });
    }
    filtrarPetById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.petRepository.filterPetById(id);
        });
    }
    filterPetByNome(name) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.petRepository.filterPetByName(name);
        });
    }
    listarTodosPets() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.petRepository.filterAllPets();
        });
    }
}
exports.PetService = PetService;
