import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ingres } from './domain/Ingres.entity';
import { IngressosController } from './controllers/ingressos.controller';
import { IngressosService } from './services/ingressos.service';
import { IngresAssemblerService } from './assemblers/ingres-assembler.service';



@Module({
  imports: [TypeOrmModule.forFeature([Ingres])],
  controllers: [IngressosController],
  providers: [IngressosService, IngresAssemblerService]
})
export class IngressosModule { }
