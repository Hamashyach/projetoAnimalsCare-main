import { Pet } from "../model/entity/petEntity";
import { PetRepository } from "../repository/petRepository";
import { ResponsavelRepository } from "../repository/responsavelRepository";



export class PetService{

    petRepository: PetRepository = new PetRepository();
    responsavelRepository = new ResponsavelRepository();

    async cadastarPet(petData: any): Promise<Pet>{
        const {idResponsavel, nome, especie, raca, genero, idade, peso} = petData;

        const pets = await this.responsavelRepository.filterUsuarioById(idResponsavel)
        if(!pets){
            throw new Error ('Usuario com ID ${idResponsavel} não encontrado');
        }
        const pet = new Pet(undefined, idResponsavel, nome, especie, raca, genero, idade, peso)
        return await this.petRepository.insertPet(pet);
    }

    async atualizarPet(petData: any): Promise<Pet>{
        const {id, idResponsavel, nome, especie, raca, genero, idade, peso} = petData;

        const pet = new Pet(id, idResponsavel, nome, especie, raca, genero, idade, peso)
        await this.petRepository.updatePet(pet);
        return pet;
    }

    async deletarPet(petData: any): Promise<Pet>{
        const {id, idResponsavel, nome, especie, raca, genero, idade, peso} = petData;

        const pet = new Pet(id, idResponsavel, nome, especie, raca, genero, idade, peso)
        return pet;

    }

    async filtrarPetById(id: number): Promise<Pet | null>{
       return await this.petRepository.filterPetById(id)
    }

    async filterPetByNome(name: string): Promise<Pet[] | null> {
        return await this.petRepository.filterPetByName(name);
    }

    async listarTodosPets(): Promise<Pet[]>{
        return await this.petRepository.filterAllPets();
    }
}