import { Module } from '@nestjs/common';
import { User } from './domain/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './services/users.service';
import { PerfilController } from './controllers/perfil.controller';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [PerfilController],
  providers: [UsersService],
  exports: [UsersService]
})
export class UsersModule { }
