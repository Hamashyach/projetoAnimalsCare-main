import { Body, Controller, Delete, Get, Path, Post, Put, Query, Res, Route, Tags, TsoaResponse } from "tsoa";
import { PetService } from "../service/petService";
import { PetRequestDto } from "../model/dto/petRequestDto";
import { BasicResponseDto } from "../model/dto/BasicResponseDto";
import { PetDto } from "../model/dto/petDto";

@Route("pet")
@Tags("Pet")
export class PetController extends Controller{
    petService = new PetService();

    @Post()
    async cadastrarPet(
        @Body() dto: PetRequestDto,
        @Res() fail: TsoaResponse<400, BasicResponseDto>,
        @Res() sucess: TsoaResponse<201, BasicResponseDto>
    ): Promise<void> {
        try{
            const pet = await this.petService.cadastarPet(dto);
            return sucess(201, new BasicResponseDto("Pet criado com sucesso!", pet));

        } catch (error: any){
            return fail(400, new BasicResponseDto(error.message, undefined));
        }
    }

    @Put()
    async atualizarPet(
        @Body() dto: PetDto,
        @Res() notFound: TsoaResponse<400, BasicResponseDto>,
        @Res() success: TsoaResponse<200, BasicResponseDto>
    ): Promise<void>{
        try{
            const pet = await this.petService.atualizarPet(dto);
            return success(200, new BasicResponseDto("Pet atualizado com sucesso!", pet));
        } catch (error: any) {
            return notFound(400, new BasicResponseDto(error.message, undefined));
        }
    }

    @Delete()
    async deletarPet(
        @Body() dto: PetDto,
        @Res() notFound: TsoaResponse<400, BasicResponseDto>,
        @Res() success: TsoaResponse<200, BasicResponseDto>
        ): Promise<void>{
            try{
                const pet = await this.petService.deletarPet(dto);
                return success(200, new BasicResponseDto("Pet deletado com sucesso!", pet));
            } catch (error: any) {
                return notFound(400, new BasicResponseDto(error.message, undefined));
            }

        }
        @Get("id/{id}")
        async filtrarPetId(
            @Path() id: number,
            @Res() notFound: TsoaResponse<400, BasicResponseDto>,
            @Res() success: TsoaResponse<200, BasicResponseDto>
        ): Promise<void>{
            try {
                const pet = await this.petService.filtrarPetById(id);
                return success(200, new BasicResponseDto("Pet encontrado!", pet));
            } catch (error: any) {
                return notFound(400, new BasicResponseDto(error.message, undefined));
            }

        }

        @Get("name/{name}")
        async filterPetByName(
            @Query() name: string,
            @Res() notFound: TsoaResponse<400, BasicResponseDto>,
            @Res() success: TsoaResponse<200, BasicResponseDto>
        ): Promise<void> {
            try {
                const pet = await this.petService.filterPetByNome(name);
                if (name.length > 0) {
                    return success(200, new BasicResponseDto("Pets encontrados!", pet));
                } else {
                    return notFound(400, new BasicResponseDto("Nenhum pet encontrado com o nome fornecido.", undefined));
                }
            } catch (error: any) {
                return notFound(400, new BasicResponseDto(error.message, undefined));
            }
        }
    
        @Get("all")
        async listarTodosPets(
            @Res() notFound: TsoaResponse<400, BasicResponseDto>,
            @Res() success: TsoaResponse<200, BasicResponseDto>
        ): Promise<void> {
            try {
                const pet = await this.petService.listarTodosPets();
                return success(200, new BasicResponseDto("Pets listados com sucesso!", pet));
            } catch (error: any) {
                return notFound(400, new BasicResponseDto(error.message, undefined));
            }
        }
    
    





        
}