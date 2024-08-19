import { Calendario } from "../model/entity/calendarioEntity";
import { CalendarioRepository } from "../repository/calendarioRepository";

export class CalendarioService {
    private calendarioRepository: CalendarioRepository = new CalendarioRepository();

    async cadastrarData(calendarioData: any): Promise<Calendario> {
        const { dataVacinacao, tipoVacina, hora } = calendarioData;
        const calendario = new Calendario(undefined, dataVacinacao, tipoVacina, hora);
        const novaData = await this.calendarioRepository.insertData(calendario);
        console.log("Service - Insert", novaData);
        return novaData;
    }

    async atualizarData(calendarioData: any): Promise<Calendario> {
        const { id, dataVacinacao, tipoVacina, hora } = calendarioData;
        const calendario = new Calendario(id, dataVacinacao, tipoVacina, hora);
        await this.calendarioRepository.updateData(calendario);
        console.log("Service - Update", calendario);
        return calendario;
    }

    async deletarData(calendarioData: any): Promise<Calendario> {
        const { id } = calendarioData;
        const calendario = new Calendario(id);
        await this.calendarioRepository.deleteData(calendario);
        console.log("Service - Delete", calendario);
        return calendario;
    }

    async filtrarDataById(id: number): Promise<Calendario> {
        const calendario = await this.calendarioRepository.filterDataById(id);
        console.log("Service - Filtrar", calendario);
        return calendario;
    }
}
