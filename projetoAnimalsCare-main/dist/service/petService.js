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
class PetService {
    constructor() {
        this.petRepository = new petRepository_1.PetRepository();
    }
    cadastarPet(petData) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nome, especie, raca, genero, idade, peso } = petData;
            const pet = new petEntity_1.Pet(undefined, nome, especie, raca, genero, idade, peso);
            const novoPet = yield this.petRepository.insertPet(pet);
            console.log("Service - Insert", novoPet);
            return novoPet;
        });
    }
    atualizarPet(petData) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, idResponsavel, nome, especie, raca, genero, idade, peso } = petData;
            const pet = new petEntity_1.Pet(id, idResponsavel, nome, especie, raca, genero, idade, peso);
            yield this.petRepository.updatePet(pet);
            console.log("Service - Update", pet);
            return pet;
        });
    }
    deletarPet(petData) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, idResponsavel, nome, especie, raca, genero, idade, peso } = petData;
            const pet = new petEntity_1.Pet(id, idResponsavel, nome, especie, raca, genero, idade, peso);
            yield this.petRepository.deletePet(pet);
            console.log("Service - Delete", pet);
            return pet;
        });
    }
    filtrarPetById(petData) {
        return __awaiter(this, void 0, void 0, function* () {
            const idNumber = parseInt(petData, 10);
            const pet = yield this.petRepository.filterPetById(idNumber);
            console.log("Service - Filtar", pet);
            return pet;
        });
    }
}
exports.PetService = PetService;
