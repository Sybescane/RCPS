import { Module } from "@nestjs/common";
import { ClientService } from "./client.service";
import {ClientsController} from './client.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Client } from "./client.entity";
import { Subscribe } from "src/subscribe/subscribe.entity";
import { Trainer } from "src/trainers/trainers.entity";
@Module({
   controllers: [ClientsController],
   providers: [ClientService], 
   imports: [TypeOrmModule.forFeature([Client, Subscribe, Trainer])] 
})
export class ClientModule{}
