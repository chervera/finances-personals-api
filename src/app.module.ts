import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { DespesesFixesModule } from './despeses-fixes/despeses-fixes.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IngressosModule } from './ingressos/ingressos.module';
import { AlimentacioModule } from './alimentacio/alimentacio.module';
import { ConsumsModule } from './consums/consums.module';
import { MastersModule } from './masters/masters.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ConfigModule, ConfigService } from '@nestjs/config';



@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('DATABASE_HOST'),
        port: configService.get<number>('DATABASE_PORT'),
        username: configService.get('DATABASE_USER'),
        password: configService.get('DATABASE_PASS'),
        database: configService.get('DATABASE_SCHEMA', ''),
        autoLoadEntities: true,
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    DespesesFixesModule,
    IngressosModule,
    AlimentacioModule,
    ConsumsModule,
    MastersModule,
    AuthModule,
    UsersModule
  ],
  providers: [AppService],
})
export class AppModule { }
