import {Injectable} from '@nestjs/common';
import { Subscribe } from './subscribe.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { Client } from 'src/client/client.entity';
import { CreateSubscribeDto } from './dto/create-subscribe.dto';
@Injectable()
export class SubscribesService{
   constructor(
      @InjectRepository(Subscribe)
      private readonly subscribeRepository: Repository<Subscribe>,
      @InjectRepository(Client)
      private readonly clientRepository: Repository<Client>
   ){}

   async create(subscribeDto: CreateSubscribeDto): Promise<Subscribe> {
      const subscribe = this.subscribeRepository.create()
      subscribe.name = subscribeDto.name;
      subscribe.description = subscribeDto.description;
      subscribe.cost = subscribeDto.cost;
      const clients = await this.clientRepository.findBy({
         email: In(subscribeDto.clients)
      });
      subscribe.clients = clients;
      await this.subscribeRepository.save(subscribe);
      return subscribe;
   }
   findOne(id: number){
      return this.subscribeRepository.findOne({
         where: {id}
      })
   }
   async findAll(): Promise<Subscribe[]> {
      return await this.subscribeRepository.find({
         relations: {
            clients: true
         }
      });
   }
   async update(id: number, updatedSubscribe: Subscribe): Promise<Subscribe> {
      const subcribe = await this.subscribeRepository.findOne({
         where: {id}
      });
      subcribe.name = updatedSubscribe.name;
      subcribe.cost = updatedSubscribe.cost;
      subcribe.description = updatedSubscribe.description;
      subcribe.clients = updatedSubscribe.clients;
      await this.subscribeRepository.save(subcribe);
      return subcribe;
   }
   remove(id: number){
      this.subscribeRepository.delete({id})
   }
}