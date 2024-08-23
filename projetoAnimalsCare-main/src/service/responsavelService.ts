import { Responsavel } from "../model/entity/responsavelEntity";
import { ResponsavelRepository } from "../repository/responsavelRepository";

export class ResponsavelService{

    responsavelRepository: ResponsavelRepository = new ResponsavelRepository();

    async cadastarResponsavel(responsavelData: any):Promise<Responsavel> {
        const {name, email, senha} = responsavelData;

        const resposavel = new Responsavel(undefined, name, email, senha)

        const novoResponsavel = await this.responsavelRepository.insertUsuario(resposavel);
        console.log("Service - Insert", novoResponsavel);
        return novoResponsavel;
    }

    async atualizarResponsavel(responsavelData: any): Promise<Responsavel>{
        const { id, name, email, senha} = responsavelData;

        const responsavel = new Responsavel(id, name, email, senha)

        await this.responsavelRepository.updateUsuario(responsavel);
        console.log("Service - Update", responsavel);
        return responsavel;
    }

    async deletarresponsavel(id: number): Promise<void>{
        const responsavelExiste = await this.responsavelRepository.filterUsuarioById(id);
        if (!responsavelExiste){
            throw new Error(`Responsavel com ID ${id} não existe`);
        }

        await this.responsavelRepository.deleteUsuario(responsavelExiste);
        
    }

    async filtrarResponsavelById(id: number): Promise<Responsavel | null> {
        return await this.responsavelRepository.filterUsuarioById(id);
    }


}