import { Controller, Get, Post, Param, Body, NotFoundException, Delete, Put } from '@nestjs/common';
import { MastersService } from '../services/masters.service';
import { MasterDTO } from '../dto/master.dto';

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
