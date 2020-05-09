import { Controller, Get, Body, NotFoundException, Put, UseGuards } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';
import { UserDTO } from 'src/auth/dto/user.dto';
import { User } from '../domain/user.entity';
import { ProfileDTO } from '../dto/profile.dto';
import { UserAssemblerService } from '../assemblers/user-assembler.service';
import { UsersService } from '../services/users.service';


@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('/api/v1/perfil')

export class PerfilController {

    constructor(
        private service: UsersService
    ) { }

    @Get()
    async findMyProfile(@CurrentUser() user: UserDTO): Promise<ProfileDTO> {
        const profile: User = await this.service.findOne(user.userId);
        if (!profile) {
            throw new NotFoundException();
        }
        return UserAssemblerService.mapEntityToDTO(profile);
    }

    @Put()
    async update(@Body() profile: Partial<ProfileDTO>, @CurrentUser() user: UserDTO) {
        const storedUser: User = await this.service.findOne(user.userId);
        if (!storedUser) {
            throw new NotFoundException();
        }
        return this.service.update(user.userId, UserAssemblerService.mapDTOToEntity(profile, user.userId, storedUser));
    }
}
