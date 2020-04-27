import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { DespesesFixesModule } from './despeses-fixes/despeses-fixes.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IngressosModule } from './ingressos/ingressos.module';
import { AlimentacioModule } from './alimentacio/alimentacio.module';
import { ConsumsModule } from './consums/consums.module';
import { MastersModule } from './masters/masters.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'www.carleshervera.com',
      port: 3306,
      username: 'finances',
      password: 'F1nances',
      database: 'financespersonals',
      autoLoadEntities: true,
      synchronize: true,
    }),
    DespesesFixesModule,
    IngressosModule,
    AlimentacioModule,
    ConsumsModule,
    MastersModule
  ],
  providers: [AppService],
})
export class AppModule { }
