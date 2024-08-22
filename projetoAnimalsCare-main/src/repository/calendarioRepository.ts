import { executarComandoSQL } from "../database/mysql";
import { Calendario } from "../model/entity/calendarioEntity";

export class CalendarioRepository{

    constructor(){
        this.createTable();
    }

    private async createTable() {
        const query = `
        CREATE TABLE IF NOT EXISTS animalcare.DadosCalendario (
            id INT AUTO_INCREMENT PRIMARY KEY,
            data DATE NOT NULL,
            tipoCompromisso VARCHAR(255) NOT NULL,
            hora DATE NOT NULL ,
            observacao VARCHAR(255) 
            )`;

            try {
                const resultado = await executarComandoSQL(query, []);
                console.log('Query executada com sucesso', resultado);

            } catch (err) {
                console.error('Error');
            }
    }

    async insertData(calendario:Calendario): Promise<Calendario>{
        const query = "INSERT INTO animalcare.DadosCalendario (data, tipoCompromisso, hora, observacao) VALUES (?, ?, ?, ?)";

        try {
            const resultado = await executarComandoSQL(query, [calendario.data, calendario.tipoCompromisso, calendario.hora, calendario.observacao]);
            console.log ('Compromisso inserido com sucesso, ID ', resultado.insertId);
            calendario.id = resultado.insertId;
            return new Promise<Calendario>((resolve)=>{
                resolve(calendario);
        })

        } catch (err){
            console.log('Erro ao inserir compromisso', err);
            throw err;
        }
    }

    async updateData(calendario: Calendario): Promise<Calendario>{
        const query = "UPDATE animalcare.DadosCalendario set data = ?, tipoCompromisso = ?, hora = ?, observacao = ? where id = ? ";

        try {
            const resultado = await executarComandoSQL (query, [calendario.data, calendario.tipoCompromisso, calendario.hora, calendario.observacao, calendario.id]);
            console.log('Data atualizada com sucesso, ID ', resultado);
            return new Promise<Calendario>((resolve)=>{
                resolve(calendario);
            });
               
        } catch (err:any){
            console.error(`Erro ao atualizar data de ID ${calendario.id} gerando o erro: ${err}`);
            throw err;
        }
    }

    async deleteData(calendario:Calendario): Promise<Calendario>{
        const query = "DELETE FROM animalcare.DadodCalendario where id = ?";

        try {

            const resultado = await executarComandoSQL(query, [calendario.id]);
            console.log ('Data deletada com sucesso: ', calendario );
            return new Promise<Calendario>((resolve)=>{
                resolve(calendario);
            })
        } catch (err:any) {
            console.error(`Falha ao deletar data de id ${calendario.id} gerando o erro: ${err}`);
            throw err;
        }
    }

    async filterDataById(id: number):Promise<Calendario>{
        const query = "SELECT * FROM animalcare.DadosCalendario where id = ?";

        try {
            const resultado = await executarComandoSQL(query, [id]);
            console.log('Data localizada com sucesso, ID: ', resultado);
            return new Promise<Calendario>((resolve)=>{
                resolve(resultado);
            })
        } catch (err:any){
            console.error(`Erro ao procurar data de ID ${id} gerando o erro: ${err}`);
            throw err;
        }
    }
}