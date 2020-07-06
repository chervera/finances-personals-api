import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Consum } from './domain/consum.entity';
import { ConsumController } from './controllers/consums.controller';
import { ConsumsService } from './services/consums.service';
import { ConsumAssemblerService } from './assemblers/consum-assembler.service';
import { CoreModule } from 'src/core/core.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Consum]),
    CoreModule
  ],
  controllers: [ConsumController],
  providers: [ConsumsService, ConsumAssemblerService]
})
export class ConsumsModule { }
