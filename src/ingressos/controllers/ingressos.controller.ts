import { Controller, Get, Post, Param, Body, NotFoundException, Delete, Put, UseGuards } from '@nestjs/common';
import { Ingres } from '../domain/ingres.entity';
import { IngressosService } from '../services/ingressos.service';
import { IngresDTO } from '../dto/ingres.dto';
import { IngresAssemblerService } from '../assemblers/ingres-assembler.service';
import { ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';
import { UserDTO } from 'src/auth/dto/user.dto';
import { DespesesFixesAssemblerService } from 'src/despeses-fixes/assemblers/despeses-fixes-assembler.service';

@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('/api/v1/ingressos')
export class IngressosController {

    constructor(
        private service: IngressosService
    ) { }

    @Get()
    findAll(@CurrentUser() user: UserDTO): Promise<IngresDTO[]> {
        return this.service.findAllByUserId(user.userId).then((ingressos: Ingres[]) => ingressos.map((ingres => IngresAssemblerService.mapEntityToDTO(ingres))));
    }

    @Get(':id')
    async findOne(@Param('id') id: string, @CurrentUser() user: UserDTO): Promise<IngresDTO> {
        const ingres: Ingres = await this.service.findOneByUserId(id, user.userId);
        if (!ingres) {
            throw new NotFoundException();
        }
        return IngresAssemblerService.mapEntityToDTO(ingres);
    }

    @Post()
    create(@Body() ingres: IngresDTO, @CurrentUser() user: UserDTO) {
        return this.service.create(IngresAssemblerService.mapDTOToEntity(ingres, user.userId));
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() ingres: Partial<IngresDTO>, @CurrentUser() user: UserDTO) {
        const storedIngres: Ingres = await this.service.findOneByUserId(id, user.userId);
        if (!storedIngres) {
            throw new NotFoundException();
        }
        return this.service.update(+id, IngresAssemblerService.mapDTOToEntity(ingres, user.userId, storedIngres));
    }

    @Delete(':id')
    async delete(@Param('id') id: string, @CurrentUser() user: UserDTO): Promise<void> {
        const storedIngres: Ingres = await this.service.findOneByUserId(id, user.userId);
        if (!storedIngres) {
            throw new NotFoundException();
        }
        return this.service.remove(id);
    }
}
