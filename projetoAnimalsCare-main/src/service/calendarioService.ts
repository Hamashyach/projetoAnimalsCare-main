import { Calendario } from "../model/entity/calendarioEntity";
import { CalendarioRepository } from "../repository/calendarioRepository";


export class CalendarioService{

    calendarioRepository: CalendarioRepository = new CalendarioRepository();

    async cadastrarData(calendarioData: any): Promise<Calendario>{
        const {data, tipoCompromisso, hora, observacao} = calendarioData;

        const calendario = new Calendario(undefined, data, tipoCompromisso, hora, observacao)

        const novaData = await this.calendarioRepository.insertData(calendario);
        console.log("Service - Insert", novaData);
        return novaData;
    }

    async atualizarData(calendarioData: any): Promise<Calendario>{
        const {id, data, tipoCompromisso, hora, observacao} = calendarioData;

        const calendario = new Calendario(id, data, tipoCompromisso, hora, observacao)

        await this.calendarioRepository.updateData(calendario);
        console.log("Service - Update", calendario);
        return calendario;
    }

    async deletarData(calendarioData: any): Promise<Calendario>{
        const {id, data, tipoCompromisso, hora, observacao} = calendarioData;

        const calendario = new Calendario(id, data, tipoCompromisso, hora, observacao)

        await this.calendarioRepository.deleteData(calendario);
        console.log("Service - Delete", calendario);
        return calendario;

    }

    async filtrarDataById(id: number): Promise<Calendario | null>{
        return await this.calendarioRepository.filterDataById(id);
    }

    async listarTodasDatas(): Promise<Calendario[] >{
        return await this.calendarioRepository.filterAllDatas();
    }
}