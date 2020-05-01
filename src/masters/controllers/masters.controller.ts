import { Controller, Get, Post, Param, Body, NotFoundException, Delete, Put, UseGuards } from '@nestjs/common';
import { MastersService } from '../services/masters.service';
import { MasterDTO } from '../dto/master.dto';
import { ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('/api/v1/masters')
export class MasterController {

    constructor(
        private service: MastersService
    ) { }

    @Get('tipus-consums')
    findTipusConsums(): Promise<MasterDTO[]> {
        return this.service.findAllTipusConsum();
    }

    @Get('tipus-alimentacions')
    findTipusAlimentacions(): Promise<MasterDTO[]> {
        return this.service.findAllTipusAlimentacio();
    }


}
