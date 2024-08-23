import { executarComandoSQL } from "../database/mysql";
import { Responsavel} from "../model/entity/responsavelEntity";

export class ResponsavelRepository{
    constructor(){
        this.createTable();
    }

    private async createTable(){
        const query = `
        CREATE TABLE IF NOT EXISTS DadosResponsavel (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL,
            senha VARCHAR(255) NOT NULL
            )`;

            try {

                    const resultado = await executarComandoSQL(query, []);
                    console.log('query executada com sucesso', resultado);

            }catch (err) {
                console.error('error');
            }
    }

    async insertUsuario(responsavel:Responsavel):Promise<Responsavel>{
        const query = "INSERT INTO DadosResponsavel (name, email, senha) VALUES (?, ?, ?)";

        try {
            const resultado = await executarComandoSQL(query, [responsavel.name, responsavel.email, responsavel.senha]);
            console.log('Usuario inserido com sucesso, ID: ', resultado.isertid);
            responsavel.id = resultado.insertId;
            return new Promise<Responsavel>((resolve)=>{
                resolve(responsavel);
            })
        } catch (err) {
            console.error('erro ao inserir usuário', err);
            throw err;

        }
    }

    async updateUsuario(responsavel:Responsavel):Promise<Responsavel>{
        const query = 'UPDATE DadosResponsavel set name = ?, email = ?, senha = ? where id = ?';
        
      try {  
        const resultado = await executarComandoSQL(query, [responsavel.name, responsavel.email, responsavel.senha, responsavel.id]);
        console.log('Usuario atualizado com sucesso, ID', resultado);
        return new Promise<Responsavel>((resolve)=>{
            resolve(responsavel);
        })
    } catch (err:any){
        console.error(`Erro ao atualizar usuário de ID ${responsavel.id} gerando o erro: ${err}`);
        throw err;
        }
    }

    async deleteUsuario(responsavel: Responsavel):Promise<Responsavel>{
        const query = "DELETE FROM DadosReponsavel where id = ?;" ;

        try {
            await executarComandoSQL(query, [responsavel.id]);
            console.log('Usuário deletado com sucesso: ', responsavel.id);
            return responsavel;
        } catch (err:any) {
            console.error(`Falha ao deletar o usuario de ID ${responsavel.id} gerando o erro: ${err}`);
            throw err;
        }
    }

    async filterUsuarioById(id: number): Promise<Responsavel | null>{
        const query = "SELECT * FROM DadosResponsavel where id = ?";

        try {
            const resultado = await executarComandoSQL(query, [id]);
            if (resultado.lenght > 0){
                return resultado[0];
            }
            return null;
        } catch (err:any){
            console.error(`Falha ao procurar usuarip de ID ${id} gerando o erro: ${err}`);
            throw err;
        }
    }

}
