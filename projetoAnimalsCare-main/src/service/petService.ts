import { Pet } from "../model/entity/petEntity";
import { PetRepository } from "../repository/petRepository";

export class PetService {
    private petRepository: PetRepository = new PetRepository();

    async cadastrarPet(petData: any): Promise<Pet> {
        const { nome, especie, raca, genero, idade, peso } = petData;

        const pet = new Pet(undefined, nome, especie, raca, genero, idade, peso);
        const novoPet = await this.petRepository.insertPet(pet);
        console.log("Service - Insert", novoPet);
        return novoPet;
    }

    async atualizarPet(petData: any): Promise<Pet> {
        const { id, nome, especie, raca, genero, idade, peso } = petData;

        const pet = new Pet(id, nome, especie, raca, genero, idade, peso);
        await this.petRepository.updatePet(pet);
        console.log("Service - Update", pet);
        return pet;
    }

    async deletarPet(petData: any): Promise<Pet> {
        const { id } = petData;

        const pet = new Pet(id);
        await this.petRepository.deletePet(pet);
        console.log("Service - Delete", pet);
        return pet;
    }

    async filtrarPetById(id: number): Promise<Pet> {
        const pet = await this.petRepository.filterPetById(id);
        console.log("Service - Filtrar", pet);
        return pet;
    }
}
