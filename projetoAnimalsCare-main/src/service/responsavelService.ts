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

    async deletarresponsavel(responsavelData: any): Promise<Responsavel>{
        const {id, name, email, senha} = responsavelData;

        const responsavel = new Responsavel(id, name, email, senha)

        await this.responsavelRepository.deleteUsuario(responsavel);
        console.log("Service - Delete", responsavel);
        return responsavel;
    }

    async filtrarResponsavelById(responsavelData: any): Promise<Responsavel>{
        const idNumber = parseInt(responsavelData, 10);

        const responsavel = await this.responsavelRepository.filterUsuarioById(idNumber);
        console.log("Service - Filtrar", responsavel);
        return responsavel;
    }


}