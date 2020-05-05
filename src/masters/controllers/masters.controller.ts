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

    @Get('tipus-alimentacions')
    findTipusAlimentacions(@CurrentUser() user: UserDTO): Promise<MasterDTO[]> {
        return this.service.findAllTipusAlimentacioByUserId(user.userId)
            .then((masters: TipusAlimentacio[]) => masters.map(
                (master => TipusAlimentacioAssemblerService.mapEntityToDTO(master)))
            );
    }

}
