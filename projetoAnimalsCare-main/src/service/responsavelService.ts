import { Responsavel } from "../model/entity/responsavelEntity";
import { ResponsavelRepository } from "../repository/responsavelRepository";

export class ResponsavelService {
    private responsavelRepository: ResponsavelRepository = new ResponsavelRepository();

    async cadastrarResponsavel(responsavelData: any): Promise<Responsavel> {
        const { nome, email, senha } = responsavelData;

        const responsavel = new Responsavel(undefined, nome, email, senha);
        const novoResponsavel = await this.responsavelRepository.insertUsuario(responsavel);
        console.log("Service - Insert", novoResponsavel);
        return novoResponsavel;
    }

    async atualizarResponsavel(responsavelData: any): Promise<Responsavel> {
        const { id, nome, email, senha } = responsavelData;

        const responsavel = new Responsavel(id, nome, email, senha);
        await this.responsavelRepository.updateUsuario(responsavel);
        console.log("Service - Update", responsavel);
        return responsavel;
    }

    async deletarResponsavel(responsavelData: any): Promise<Responsavel> {
        const { id } = responsavelData;

        const responsavel = new Responsavel(id);
        await this.responsavelRepository.deleteUsuario(responsavel);
        console.log("Service - Delete", responsavel);
        return responsavel;
    }

    async filtrarResponsavelById(id: number): Promise<Responsavel> {
        const responsavel = await this.responsavelRepository.filterUsuarioById(id);
        console.log("Service - Filtrar", responsavel);
        return responsavel;
    }
}
