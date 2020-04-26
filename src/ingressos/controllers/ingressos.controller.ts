import { Controller, Get, Post, Param, Body, NotFoundException, Delete, Put } from '@nestjs/common';
import { Ingres } from '../domain/Ingres.entity';
import { IngressosService } from '../services/ingressos.service';
import { IngresDTO } from '../dto/ingres.dto';
import { IngresAssemblerService } from '../assemblers/ingres-assembler.service';

@Controller('/api/v1/ingressos')
export class IngressosController {

    constructor(
        private service: IngressosService
    ) { }

    @Get()
    findAll(): Promise<Ingres[]> {
        return this.service.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<Ingres> {
        const ingres: Ingres = await this.service.findOne(id);
        if (!ingres) {
            throw new NotFoundException();
        }
        return ingres;
    }

    @Post()
    create(@Body() ingres: IngresDTO) {
        return this.service.create(IngresAssemblerService.mapDTOToEntity(ingres));
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() ingres: Partial<IngresDTO>) {
        return this.service.update(+id, IngresAssemblerService.mapDTOToEntity(ingres));
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<void> {
        return this.service.remove(id);
    }
}
