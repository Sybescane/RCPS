import { Module } from '@nestjs/common';
import { TrainersModule } from './trainers/trainers.module';
import { ClientModule } from './client/client.module';
import { SubscribesModule } from './subscribe/subscribe.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configurations from '../configurations/env.config';

@Module({
  imports: [TrainersModule, ClientModule, SubscribesModule, 
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (config: ConfigService) => config.get('database'),
      inject: [ConfigService]
    }), 
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configurations]
    })],
  controllers: [],
  providers: [],
})
export class AppModule {}
