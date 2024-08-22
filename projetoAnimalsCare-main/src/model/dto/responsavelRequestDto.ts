export class ResponsavelRequestDto {
    name: string;
    email: string;
    senha: string;

    constructor( name?: string, email?: string, senha?: string) {
        this.name = name || '';
        this.email = email || '';
        this.senha = senha || '';
    }
}
