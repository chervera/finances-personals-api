import { Controller, Get, Post, Param, Body, NotFoundException, Delete, Put, UseGuards } from '@nestjs/common';
import { Alimentacio } from '../domain/alimentacio.entity';
import { AlimentacioAssemblerService } from '../assemblers/alimentacio-assembler.service';
import { AlimentacionsService } from '../services/alimentacions.service';
import { AlimentacioDTO } from '../dto/alimentacio.dto';
import { ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';
import { UserDTO } from 'src/auth/dto/user.dto';


@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('/api/v1/alimentacions')

export class AlimentacioController {

    constructor(
        private service: AlimentacionsService
    ) { }

    @Get()
    findAll(@CurrentUser() user: UserDTO): Promise<AlimentacioDTO[]> {
        return this.service.findAllByUserId(user.userId).then((alimentacions: Alimentacio[]) => alimentacions.map((alimentacio => AlimentacioAssemblerService.mapEntityToDTO(alimentacio))));
    }

    @Get(':id')
    async findOne(@Param('id') id: string, @CurrentUser() user: UserDTO): Promise<AlimentacioDTO> {
        const alimentacio: Alimentacio = await this.service.findOneByUserId(id, user.userId);
        if (!alimentacio) {
            throw new NotFoundException();
        }
        return AlimentacioAssemblerService.mapEntityToDTO(alimentacio);
    }

    @Post()
    create(@Body() alimentacio: AlimentacioDTO, @CurrentUser() user: UserDTO) {
        return this.service.create(AlimentacioAssemblerService.mapDTOToEntity(alimentacio, user.userId));
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() alimentacio: Partial<AlimentacioDTO>, @CurrentUser() user: UserDTO) {
        const storedAlimentacio: Alimentacio = await this.service.findOneByUserId(id, user.userId);
        if (!storedAlimentacio) {
            throw new NotFoundException();
        }
        return this.service.update(+id, AlimentacioAssemblerService.mapDTOToEntity(alimentacio, user.userId, storedAlimentacio));
    }

    @Delete(':id')
    async delete(@Param('id') id: string, @CurrentUser() user: UserDTO): Promise<void> {
        const alimentacio: Alimentacio = await this.service.findOneByUserId(id, user.userId);
        if (!alimentacio) {
            throw new NotFoundException();
        }
        return this.service.remove(id);
    }
}
