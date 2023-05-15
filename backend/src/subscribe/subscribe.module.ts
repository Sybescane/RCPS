import { Module } from "@nestjs/common";
import { SubscribesService } from './subscribe.service';
import { SubscribesController } from './subscribe.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Client } from "src/client/client.entity";
import { Subscribe } from "./subscribe.entity";

@Module({
   controllers: [SubscribesController],
   providers: [SubscribesService],
   imports: [TypeOrmModule.forFeature([Client, Subscribe])],
   })

export class SubscribesModule{}