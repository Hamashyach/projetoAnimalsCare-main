import { Calendario } from "../model/entity/calendarioEntity";
import { executarComandoSQL } from "../database/mysql";

export class CalendarioRepository {
    constructor() {
        this.createTable();
    }

    private async createTable() {
        const query = `
        CREATE TABLE IF NOT EXISTS DadosCalendario (
            id INT AUTO_INCREMENT PRIMARY KEY,
            dataVacinacao DATE NOT NULL,
            tipoVacina VARCHAR(255) NOT NULL,
            hora TIME NOT NULL
        )`;

        try {
            const resultado = await executarComandoSQL(query, []);
            console.log('Tabela de calendário criada com sucesso', resultado);
        } catch (err) {
            console.error('Erro ao criar tabela de calendário:', err);
        }
    }

    async insertData(calendario: Calendario): Promise<Calendario> {
        const query = "INSERT INTO DadosCalendario (dataVacinacao, tipoVacina, hora) VALUES (?, ?, ?)";

        try {
            const resultado = await executarComandoSQL(query, [calendario.dataVacinacao, calendario.tipoVacina, calendario.hora]);
            console.log('Vacinação inserida com sucesso, ID:', resultado.insertId);
            calendario.id = resultado.insertId;
            return calendario;
        } catch (err) {
            console.error('Erro ao inserir vacinação:', err);
            throw err;
        }
    }

    async updateData(calendario: Calendario): Promise<Calendario> {
        const query = "UPDATE DadosCalendario SET dataVacinacao = ?, tipoVacina = ?, hora = ? WHERE id = ?";

        try {
            await executarComandoSQL(query, [calendario.dataVacinacao, calendario.tipoVacina, calendario.hora, calendario.id]);
            console.log('Vacinação atualizada com sucesso, ID:', calendario.id);
            return calendario;
        } catch (err) {
            console.error('Erro ao atualizar vacinação:', err);
            throw err;
        }
    }

    async deleteData(calendario: Calendario): Promise<Calendario> {
        const query = "DELETE FROM DadosCalendario WHERE id = ?";

        try {
            await executarComandoSQL(query, [calendario.id]);
            console.log('Vacinação deletada com sucesso, ID:', calendario.id);
            return calendario;
        } catch (err) {
            console.error('Erro ao deletar vacinação:', err);
            throw err;
        }
    }

    async filterDataById(id: number): Promise<Calendario> {
        const query = "SELECT * FROM DadosCalendario WHERE id = ?";

        try {
            const resultado = await executarComandoSQL(query, [id]);
            console.log('Vacinação localizada com sucesso, ID:', id);
            return resultado[0];
        } catch (err) {
            console.error('Erro ao procurar vacinação por ID:', err);
            throw err;
        }
    }
}
