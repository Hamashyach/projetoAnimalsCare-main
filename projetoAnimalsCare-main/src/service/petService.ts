import { Pet } from "../model/entity/petEntity";
import { PetRepository } from "../repository/petRepository";


export class PetService{

    petRepository: PetRepository = new PetRepository();

    async cadastarPet(petData: any): Promise<Pet>{
        const {nome, especie, raca, genero, idade, peso} = petData;

        const pet = new Pet(undefined, nome, especie, raca, genero, idade, peso)

        const novoPet = await this.petRepository.insertPet(pet);
        console.log("Service - Insert", novoPet);
        return novoPet;
    }

    async atualizarPet(petData: any): Promise<Pet>{
        const {id, idResponsavel, nome, especie, raca, genero, idade, peso} = petData;

        const pet = new Pet(id, idResponsavel, nome, especie, raca, genero, idade, peso)

        await this.petRepository.updatePet(pet);
        console.log("Service - Update", pet);
        return pet;
    }

    async deletarPet(petData: any): Promise<Pet>{
        const {id, idResponsavel, nome, especie, raca, genero, idade, peso} = petData;

        const pet = new Pet(id, idResponsavel, nome, especie, raca, genero, idade, peso)

        await this.petRepository.deletePet(pet);
        console.log("Service - Delete", pet);
        return pet;

    }

    async filtrarPetById(petData: any): Promise<Pet>{
        const idNumber = parseInt(petData, 10);

        const pet = await this.petRepository.filterPetById(idNumber);
        console.log("Service - Filtar", pet);
        return pet;
    }
}