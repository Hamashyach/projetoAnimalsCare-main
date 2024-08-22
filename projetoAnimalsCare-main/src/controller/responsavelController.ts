import { ResponsavelService } from "../service/responsavelService";
import { ResponsavelRequestDto } from "../model/dto/responsavelRequestDto";
import { BasicResponseDto } from "../model/dto/BasicResponseDto";
import { ResponsavelDto } from "../model/dto/responsavelDto";
import { Body, Controller, Delete, Get, Path, Post, Put, Res, Route, Tags, TsoaResponse } from "tsoa";

@Route("responsavel")
@Tags("Responsavel")
export class ResponsavelController extends Controller{
    responsavelService = new ResponsavelService();

    @Post()
    async cadastrarUsuario(
        @Body() dto: ResponsavelRequestDto,
        @Res() fail: TsoaResponse<400, BasicResponseDto>,
        @Res() sucess: TsoaResponse<201, BasicResponseDto>
    ): Promise<void> {
        try{
            const responsavel = await this.responsavelService.cadastarResponsavel(dto);
            return sucess(201, new BasicResponseDto("Usuario criado com sucesso!", responsavel));

        } catch (error: any){
            return fail(400, new BasicResponseDto(error.message, undefined));
        }
    }

    @Put()
    async atualizarUsuario(
        @Body() dto: ResponsavelDto,
        @Res() notFound: TsoaResponse<400, BasicResponseDto>,
        @Res() success: TsoaResponse<200, BasicResponseDto>
    ): Promise<void>{
        try{
            const responsavel = await this.responsavelService.atualizarResponsavel(dto);
            return success(200, new BasicResponseDto("Usuario atualizado com sucesso!", responsavel));
        } catch (error: any) {
            return notFound(400, new BasicResponseDto(error.message, undefined));
        }
    }

    @Delete()
    async deletarUsuario(
        @Body() dto: ResponsavelDto,
        @Res() notFound: TsoaResponse<400, BasicResponseDto>,
        @Res() success: TsoaResponse<200, BasicResponseDto>
    ): Promise<void> {
        try {
            await this.responsavelService.deletarresponsavel(dto);
            return success(200, new BasicResponseDto("Usuário deletado com sucesso!", undefined));
        } catch (error: any) {
            return notFound(400, new BasicResponseDto(error.message, undefined));
        }
    }
    
        @Get("id/{id}")
        async filtrarResponsavelId(
            @Path() id: number,
            @Res() notFound: TsoaResponse<400, BasicResponseDto>,
            @Res() success: TsoaResponse<200, BasicResponseDto>
        ): Promise<void>{
            try {
                const responsavel = await this.responsavelService.filtrarResponsavelById(id);
                return success(200, new BasicResponseDto("Usuario encontrado!", responsavel));
            } catch (error: any) {
                return notFound(400, new BasicResponseDto(error.message, undefined));
            }

        }




        
        
}