import { Controller, Get, Post, Param, Body, NotFoundException, Delete, Put, UseGuards } from '@nestjs/common';
import { MastersService } from '../services/masters.service';
import { MasterDTO } from '../dto/master.dto';
import { ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { UserDTO } from 'src/auth/dto/user.dto';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';
import { TipusConsum } from '../domain/tipus-consum.entity';
import { TipusAlimentacioAssemblerService } from '../assemblers/tipus-alimentacio-assembler.service';
import { TipusAlimentacio } from '../domain/tipus-alimentacio.entity';
import { TipusConsumAssemblerService } from '../assemblers/tipus-consum-assembler.service';

@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('/api/v1/masters')
export class MasterController {

    constructor(
        private service: MastersService
    ) { }

    @Get('tipus-consums')
    findTipusConsums(@CurrentUser() user: UserDTO): Promise<MasterDTO[]> {
        return this.service.findAllTipusConsumByUserId(user.userId)
            .then((masters: TipusConsum[]) => masters.map(
                (master => TipusConsumAssemblerService.mapEntityToDTO(master)))
            );
    }

    @Get('tipus-consums/:id')
    async findOneTipusConsums(@Param('id') id: string, @CurrentUser() user: UserDTO): Promise<MasterDTO> {
        const tipusConsum: TipusConsum = await this.service.findOneTipusConsumByUserId(id, user.userId);
        if (!tipusConsum) {
            throw new NotFoundException();
        }
        return TipusConsumAssemblerService.mapEntityToDTO(tipusConsum);
    }

    @Post('tipus-consums')
    createTipusConsums(@Body() consum: MasterDTO, @CurrentUser() user: UserDTO) {
        return this.service.createTipusConsum(TipusConsumAssemblerService.mapDTOToEntity(consum, user.userId));
    }

    @Delete('tipus-consums/:id')
    async deleteTipusConsums(@Param('id') id: string, @CurrentUser() user: UserDTO): Promise<void> {
        const storedConsum: TipusConsum = await this.service.findOneTipusConsumByUserId(id, user.userId);
        if (!storedConsum) {
            throw new NotFoundException();
        }
        return this.service.removeTipusConsum(id);
    }

    @Get('tipus-alimentacions')
    findTipusAlimentacions(@CurrentUser() user: UserDTO): Promise<MasterDTO[]> {
        return this.service.findAllTipusAlimentacioByUserId(user.userId)
            .then((masters: TipusAlimentacio[]) => masters.map(
                (master => TipusAlimentacioAssemblerService.mapEntityToDTO(master)))
            );
    }

    @Get('tipus-alimentacions/:id')
    async findOneTipusAlimentacions(@Param('id') id: string, @CurrentUser() user: UserDTO): Promise<MasterDTO> {
        const tipusAlimentacio: TipusAlimentacio = await this.service.findOneTipusAlimentacioByUserId(id, user.userId);
        if (!tipusAlimentacio) {
            throw new NotFoundException();
        }
        return TipusAlimentacioAssemblerService.mapEntityToDTO(tipusAlimentacio);
    }

    @Post('tipus-alimentacions')
    createTipusAlimentacio(@Body() tipusAlimentacio: MasterDTO, @CurrentUser() user: UserDTO) {
        return this.service.createTipusAlimentacio(TipusAlimentacioAssemblerService.mapDTOToEntity(tipusAlimentacio, user.userId));
    }

    @Delete('tipus-alimentacions/:id')
    async deleteTipuAlimentacio(@Param('id') id: string, @CurrentUser() user: UserDTO): Promise<void> {
        const storedAlimentacio: TipusAlimentacio = await this.service.findOneTipusAlimentacioByUserId(id, user.userId);
        if (!storedAlimentacio) {
            throw new NotFoundException();
        }
        return this.service.removeTipusAlimentacio(id);
    }

}
