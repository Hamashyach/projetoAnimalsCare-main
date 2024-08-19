import { Body, Controller, Delete, Get, Path, Post, Put, Res, Route, Tags, TsoaResponse } from "tsoa";
import { CalendarioService } from "../service/calendarioService";
import { CalendarioRequestDto } from "../model/dto/calendarioRequestDto";
import { BasicResponseDto } from "../model/dto/BasicResponseDto";
import { CalendarioDto } from "../model/dto/calendarioDto";

@Route("calendario")
@Tags("Calendario")
export class CalendarioController extends Controller {
    calendarioService = new CalendarioService();

    @Post()
    async cadastrarData(
        @Body() dto: CalendarioRequestDto,
        @Res() fail: TsoaResponse<400, BasicResponseDto>,
        @Res() success: TsoaResponse<201, BasicResponseDto>
    ): Promise<void> {
        try {
            const calendario = await this.calendarioService.cadastrarData(dto);
            return success(201, new BasicResponseDto("Data criada com sucesso!", calendario));
        } catch (error: any) {
            return fail(400, new BasicResponseDto(error.message, undefined));
        }
    }

    @Put()
    async atualizarData(
        @Body() dto: CalendarioDto,
        @Res() notFound: TsoaResponse<400, BasicResponseDto>,
        @Res() success: TsoaResponse<200, BasicResponseDto>
    ): Promise<void> {
        try {
            const calendario = await this.calendarioService.atualizarData(dto);
            return success(200, new BasicResponseDto("Data atualizada com sucesso!", calendario));
        } catch (error: any) {
            return notFound(400, new BasicResponseDto(error.message, undefined));
        }
    }

    @Delete()
    async deletarData(
        @Body() dto: CalendarioDto,
        @Res() notFound: TsoaResponse<400, BasicResponseDto>,
        @Res() success: TsoaResponse<200, BasicResponseDto>
    ): Promise<void> {
        try {
            const calendario = await this.calendarioService.deletarData(dto);
            return success(200, new BasicResponseDto("Data deletada com sucesso!", calendario));
        } catch (error: any) {
            return notFound(400, new BasicResponseDto(error.message, undefined));
        }
    }

    @Get("id/{id}")
    async filtrarDataById(
        @Path() id: number,
        @Res() notFound: TsoaResponse<400, BasicResponseDto>,
        @Res() success: TsoaResponse<200, BasicResponseDto>
    ): Promise<void> {
        try {
            const calendario = await this.calendarioService.filtrarDataById(id);
            return success(200, new BasicResponseDto("Data encontrado!", calendario));
        } catch (error: any) {
            return notFound(400, new BasicResponseDto(error.message, undefined));
        }
    }
}
