import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipusConsum } from './domain/tipus-consum.entity';
import { TipusAlimentacio } from './domain/tipus-alimentacio.entity';
import { MasterController } from './controllers/masters.controller';
import { MastersService } from './services/masters.service';
import { TipusConsumAssemblerService } from './assemblers/tipus-consum-assembler.service';
import { TipusAlimentacioAssemblerService } from './assemblers/tipus-alimentacio-assembler.service';

@Module({
  imports: [TypeOrmModule.forFeature([TipusAlimentacio, TipusConsum])],
  controllers: [MasterController],
  providers: [MastersService, TipusConsumAssemblerService, TipusAlimentacioAssemblerService]
})
export class MastersModule { }
