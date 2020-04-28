import { Controller, Get, Post, Param, Body, NotFoundException, Delete, Put } from '@nestjs/common';
import { Alimentacio } from '../domain/alimentacio.entity';
import { AlimentacioAssemblerService } from '../assemblers/alimentacio-assembler.service';
import { AlimentacionsService } from '../services/alimentacions.service';
import { AlimentacioDTO } from '../dto/alimentacio.dto';

@Controller('/api/v1/alimentacions')
export class AlimentacioController {

    constructor(
        private service: AlimentacionsService
    ) { }

    @Get()
    findAll(): Promise<Alimentacio[]> {
        return this.service.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<Alimentacio> {
        const alimentacio: Alimentacio = await this.service.findOne(id);
        if (!alimentacio) {
            throw new NotFoundException();
        }
        return alimentacio;
    }

    @Post()
    create(@Body() alimentacio: AlimentacioDTO) {
        return this.service.create(AlimentacioAssemblerService.mapDTOToEntity(alimentacio));
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() alimentacio: Partial<AlimentacioDTO>) {
        return this.service.update(+id, AlimentacioAssemblerService.mapDTOToEntity(alimentacio));
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<void> {
        return this.service.remove(id);
    }
}
