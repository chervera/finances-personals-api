import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { DespesesFixesModule } from './despeses-fixes/despeses-fixes.module';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'http://www.carleshervera.com',
      port: 3306,
      username: 'finances',
      password: 'F1nances',
      database: 'financespersonals',
      autoLoadEntities: true,
      synchronize: true,
    }),
    DespesesFixesModule
  ],
  providers: [AppService],
})
export class AppModule { }
