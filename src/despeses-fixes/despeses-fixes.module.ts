import { Module } from '@nestjs/common';
import { DespesesFixesService } from './services/despeses-fixes.service';
import { DespesesFixesController } from './controllers/despeses-fixes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DespesaFixa } from './domain/despesa-fixa.entity';
import { DespesesFixesAssemblerService } from './assemblers/despeses-fixes-assembler.service';
import { CoreModule } from 'src/core/core.module';


@Module({
  imports: [
    TypeOrmModule.forFeature([DespesaFixa]),
    CoreModule
  ],
  controllers: [DespesesFixesController],
  providers: [DespesesFixesService, DespesesFixesAssemblerService]
})
export class DespesesFixesModule { }
