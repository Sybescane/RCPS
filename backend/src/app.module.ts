import { Module } from '@nestjs/common';
import { TrainersModule } from './trainers/trainers.module';
import { ClientModule } from './client/client.module';
import { SubscribesModule } from './subscribe/subscribe.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import configurations from '../configurations/env.config'
import { configOrm } from 'configurations/typeorm.config';

@Module({
  imports: [TrainersModule, ClientModule, SubscribesModule, 
    TypeOrmModule.forRoot(configOrm), 
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configurations]
    })],
  controllers: [],
  providers: [],
})
export class AppModule {}
