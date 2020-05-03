import { Controller, Get, Post, Param, Body, NotFoundException, Delete, Put, UseGuards } from '@nestjs/common';
import { Consum } from '../domain/consum.entity';
import { ConsumAssemblerService } from '../assemblers/consum-assembler.service';
import { ConsumsService } from '../services/consums.service';
import { ConsumDTO } from '../dto/consum.dto';
import { ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';
import { UserDTO } from 'src/auth/dto/user.dto';

@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('/api/v1/consums')
export class ConsumController {

    constructor(
        private service: ConsumsService
    ) { }

    @Get()
    findAll(@CurrentUser() user: UserDTO): Promise<Consum[]> {
        return this.service.findAllByUserId(user.userId);
    }

    @Get(':id')
    async findOne(@Param('id') id: string, @CurrentUser() user: UserDTO): Promise<ConsumDTO> {
        const consum: Consum = await this.service.findOneByUserId(id, user.userId);
        if (!consum) {
            throw new NotFoundException();
        }
        return ConsumAssemblerService.mapEntityToDTO(consum);
    }

    @Post()
    create(@Body() consum: ConsumDTO, @CurrentUser() user: UserDTO) {
        return this.service.create(ConsumAssemblerService.mapDTOToEntity(consum, user.userId));
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() consum: Partial<ConsumDTO>, @CurrentUser() user: UserDTO) {
        const storedConsum: Consum = await this.service.findOneByUserId(id, user.userId);
        if (!storedConsum) {
            throw new NotFoundException();
        }
        return this.service.update(+id, ConsumAssemblerService.mapDTOToEntity(consum, user.userId, storedConsum));
    }

    @Delete(':id')
    async delete(@Param('id') id: string, @CurrentUser() user: UserDTO): Promise<void> {
        const storedConsum: Consum = await this.service.findOneByUserId(id, user.userId);
        if (!storedConsum) {
            throw new NotFoundException();
        }
        return this.service.remove(id);
    }
}
