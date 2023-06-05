import { Module } from '@nestjs/common';
import { ClientModule } from './client/client.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import config from '../configurations/env.config';
import { SubscribesModule } from './subscribe/subscribe.module';
import { TrainersModule } from './trainers/trainers.module';

@Module({
  imports: [ClientModule, SubscribesModule, TrainersModule,
  TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: (config: ConfigService) => config.get('database'),
  }),
  ConfigModule.forRoot({
    isGlobal: true,
    load: [config]
  }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
