import { Responsavel } from "../model/entity/responsavelEntity";
import { executarComandoSQL } from "../database/mysql";

export class ResponsavelRepository {
    constructor() {
        this.createTable();
    }

    private async createTable() {
        const query = `
        CREATE TABLE IF NOT EXISTS DadosResponsavel (
            id INT AUTO_INCREMENT PRIMARY KEY,
            nome VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL UNIQUE,
            senha VARCHAR(255) NOT NULL
        )`;

        try {
            const resultado = await executarComandoSQL(query, []);
            console.log('Tabela de responsável criada com sucesso', resultado);
        } catch (err) {
            console.error('Erro ao criar tabela de responsável:', err);
        }
    }

    async insertUsuario(responsavel: Responsavel): Promise<Responsavel> {
        const query = "INSERT INTO DadosResponsavel (nome, email, senha) VALUES (?, ?, ?)";

        try {
            const resultado = await executarComandoSQL(query, [responsavel.nome, responsavel.email, responsavel.senha]);
            console.log('Responsável inserido com sucesso, ID:', resultado.insertId);
            responsavel.id = resultado.insertId;
            return responsavel;
        } catch (err) {
            console.error('Erro ao inserir responsável:', err);
            throw err;
        }
    }

    async updateUsuario(responsavel: Responsavel): Promise<Responsavel> {
        const query = "UPDATE DadosResponsavel SET nome = ?, email = ?, senha = ? WHERE id = ?";

        try {
            await executarComandoSQL(query, [responsavel.nome, responsavel.email, responsavel.senha, responsavel.id]);
            console.log('Responsável atualizado com sucesso, ID:', responsavel.id);
            return responsavel;
        } catch (err) {
            console.error('Erro ao atualizar responsável:', err);
            throw err;
        }
    }

    async deleteUsuario(responsavel: Responsavel): Promise<Responsavel> {
        const query = "DELETE FROM DadosResponsavel WHERE id = ?";

        try {
            await executarComandoSQL(query, [responsavel.id]);
            console.log('Responsável deletado com sucesso, ID:', responsavel.id);
            return responsavel;
        } catch (err) {
            console.error('Erro ao deletar responsável:', err);
            throw err;
        }
    }

    async filterUsuarioById(id: number): Promise<Responsavel> {
        const query = "SELECT * FROM DadosResponsavel WHERE id = ?";

        try {
            const resultado = await executarComandoSQL(query, [id]);
            console.log('Responsável localizado com sucesso, ID:', id);
            return resultado[0];
        } catch (err) {
            console.error('Erro ao procurar responsável por ID:', err);
            throw err;
        }
    }
}
