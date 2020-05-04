import { Controller, Get, Post, Param, Body, NotFoundException, Delete, Put, Query, UseGuards } from '@nestjs/common';
import { DespesesFixesService } from '../services/despeses-fixes.service';
import { DespesaFixa } from '../domain/despesa-fixa.entity';
import { DespesaFixaDTO } from '../dto/despesa-fixa.dto';
import { DespesesFixesAssemblerService } from '../assemblers/despeses-fixes-assembler.service';
import { ApiQuery, ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';
import { UserDTO } from 'src/auth/dto/user.dto';

@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('/api/v1/despeses-fixes')
export class DespesesFixesController {

    constructor(
        private service: DespesesFixesService
    ) { }

    @Get()
    @ApiQuery({ name: 'year', required: false })
    @ApiQuery({ name: 'month', required: false })
    findAll(@Query('year') year: number, @Query('month') month: number, @CurrentUser() user: UserDTO): Promise<DespesaFixa[]> {
        return this.service.findAllByUserId(user.userId, { year, month });
    }

    @Get(':id')
    async findOne(@Param('id') id: string, @CurrentUser() user: UserDTO): Promise<DespesaFixaDTO> {
        const despesaFixa: DespesaFixa = await this.service.findOneByUserId(id, user.userId);
        if (!despesaFixa) {
            throw new NotFoundException();
        }
        return DespesesFixesAssemblerService.mapEntityToDTO(despesaFixa);
    }

    @Post()
    create(@Body() despesaFixa: DespesaFixaDTO, @CurrentUser() user: UserDTO) {
        return this.service.create(DespesesFixesAssemblerService.mapDTOToEntity(despesaFixa, user.userId));
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() despesaFixa: Partial<DespesaFixaDTO>, @CurrentUser() user: UserDTO) {
        const storedDespesaFixa: DespesaFixa = await this.service.findOneByUserId(id, user.userId);
        if (!storedDespesaFixa) {
            throw new NotFoundException();
        }
        return this.service.update(+id, DespesesFixesAssemblerService.mapDTOToEntity(despesaFixa, user.userId, storedDespesaFixa));
    }

    @Delete(':id')
    async delete(@Param('id') id: string, @CurrentUser() user: UserDTO): Promise<void> {
        const storedDespesaFixa: DespesaFixa = await this.service.findOneByUserId(id, user.userId);
        if (!storedDespesaFixa) {
            throw new NotFoundException();
        }
        return this.service.remove(id);
    }
}
