import {HttpStatus, Injectable} from '@nestjs/common';
import { Trainer } from './trainers.entity';
import { In, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Client } from 'src/client/client.entity';
import { CreateTrainerDto } from './dto/create-trainer.dto';
import { triggerAsyncId } from 'async_hooks';
import { IncompleteTrainerDto } from './dto/incomplete-trainer.dto';
@Injectable()
export class TrainersService{
   constructor(
      @InjectRepository(Trainer)
      private readonly trainerRepository: Repository<Trainer>, 
      @InjectRepository(Client)
      private readonly clientRepository: Repository<Client>
   ){}
   async create(trainerDto: CreateTrainerDto): Promise<Trainer> {
      const trainer = this.trainerRepository.create();
      trainer.fullName = trainerDto.fullName;
      trainer.profile = trainerDto.profile;
      trainer.experience = trainerDto.experience;
      const clients = await this.clientRepository.findBy({
         email: In(trainerDto.clients)
      })
      trainer.clients = clients;
      await this.trainerRepository.save(trainer);
      return trainer;
   }
   findOne(id: number): Promise<Trainer> {
      return this.trainerRepository.findOne({
         where: {id},
         relations: {
            clients: true
         }
      })
   }
   async findAll(): Promise<Trainer[]> {
      return await this.trainerRepository.find({
         relations: {
            clients: true,
         },
      })
   }
   async update(id: number, updatedTrainer: Trainer): Promise<Trainer> {
      const trainer = await this.trainerRepository.findOne({
         where: {id},
      });
      trainer.fullName = updatedTrainer.fullName;
      trainer.profile = updatedTrainer.profile;
      trainer.experience = updatedTrainer.experience;
      trainer.clients = updatedTrainer.clients;
      await this.trainerRepository.save(trainer);
      return trainer;
   }
   remove(id: number){
      this.trainerRepository.delete({id});
   }
   async findIncomplete(): Promise<IncompleteTrainerDto[]>{
      const trainers = await this.trainerRepository.find();
      const incompleteTrainers: IncompleteTrainerDto[] = trainers.map((trainer) => {
         const incompleteTrainer = new IncompleteTrainerDto();
         incompleteTrainer.fullName = trainer.fullName;
         incompleteTrainer.profile = trainer.profile;
         return incompleteTrainer;
      })
      return incompleteTrainers;
   }
}