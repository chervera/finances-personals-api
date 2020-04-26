import { Controller, Get, Post, Param, Body, NotFoundException, Delete, Put, Query } from '@nestjs/common';
import { DespesesFixesService } from '../services/despeses-fixes.service';
import { DespesaFixa } from '../domain/despesa-fixa.entity';
import { DespesaFixaDTO } from '../dto/despesa-fixa.dto';
import { DespesesFixesAssemblerService } from '../assemblers/despeses-fixes-assembler.service';
import { ApiQuery } from '@nestjs/swagger';

@Controller('/api/v1/despeses-fixes')
export class DespesesFixesController {

    constructor(
        private service: DespesesFixesService
    ) { }

    @Get()
    @ApiQuery({ name: 'year', required: false })
    @ApiQuery({ name: 'month', required: false })
    findAll(@Query('year') year: number, @Query('month') month: number): Promise<DespesaFixa[]> {
        return this.service.findAll(year, month);
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<DespesaFixa> {
        const despesaFixa: DespesaFixa = await this.service.findOne(id);
        if (!despesaFixa) {
            throw new NotFoundException();
        }
        return despesaFixa;
    }

    @Post()
    create(@Body() despesaFixa: DespesaFixaDTO) {
        return this.service.create(DespesesFixesAssemblerService.mapDTOToEntity(despesaFixa));
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() despesaFixa: Partial<DespesaFixaDTO>) {
        return this.service.update(+id, DespesesFixesAssemblerService.mapDTOToEntity(despesaFixa));
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<void> {
        return this.service.remove(id);
    }
}
