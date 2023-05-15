import { Module } from "@nestjs/common";
import { TrainersService } from './trainers.service';
import { TrainersController } from './trainers.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Client } from "src/client/client.entity";
import { Trainer } from "./trainers.entity";

@Module({
   controllers: [TrainersController],
   providers: [TrainersService],
   imports: [TypeOrmModule.forFeature([Client, Trainer])],
})

export class TrainersModule{}