import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Alimentacio } from './domain/alimentacio.entity';
import { AlimentacioController } from './controllers/alimentacio.controller';
import { AlimentacionsService } from './services/alimentacions.service';
import { AlimentacioAssemblerService } from './assemblers/alimentacio-assembler.service';
import { CoreModule } from 'src/core/core.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Alimentacio]),
    CoreModule
  ],
  controllers: [AlimentacioController],
  providers: [AlimentacionsService, AlimentacioAssemblerService]
})
export class AlimentacioModule { }
