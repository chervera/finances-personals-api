import { Controller, Get, Post, Param, Body, NotFoundException, Delete, Put, UseGuards } from '@nestjs/common';
import { Consum } from '../domain/consum.entity';
import { ConsumAssemblerService } from '../assemblers/consum-assembler.service';
import { ConsumsService } from '../services/consums.service';
import { ConsumDTO } from '../dto/consum.dto';
import { ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('/api/v1/consums')
export class ConsumController {

    constructor(
        private service: ConsumsService
    ) { }

    @Get()
    findAll(): Promise<Consum[]> {
        return this.service.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<Consum> {
        const consum: Consum = await this.service.findOne(id);
        if (!consum) {
            throw new NotFoundException();
        }
        return consum;
    }

    @Post()
    create(@Body() consum: ConsumDTO) {
        return this.service.create(ConsumAssemblerService.mapDTOToEntity(consum));
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() consum: Partial<ConsumDTO>) {
        return this.service.update(+id, ConsumAssemblerService.mapDTOToEntity(consum));
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<void> {
        return this.service.remove(id);
    }
}
