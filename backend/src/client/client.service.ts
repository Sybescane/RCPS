import { HttpStatus, Injectable } from "@nestjs/common";
import { Client } from './client.entity';
import { InjectRepository } from "@nestjs/typeorm";
import { In, Repository } from "typeorm";
import { Trainer } from "src/trainers/trainers.entity";
import { Subscribe } from "src/subscribe/subscribe.entity";
import { CreateClientDto } from "./dto/create-client.dto";
import { IncompleteClientDto } from './dto/incomlete-client.dto';

@Injectable()
export class ClientService{
   constructor(
      @InjectRepository(Client)
      private readonly clientRepository: Repository<Client>,
      @InjectRepository(Trainer)
      private readonly trainerRepository: Repository<Trainer>,
      @InjectRepository(Subscribe)
      private readonly subscribeRepository: Repository<Subscribe>
   ){}
   
   async create(clientDto: CreateClientDto): Promise<Client> {
      const client = this.clientRepository.create();
      client.fullname = clientDto.fullname;
      client.age = clientDto.age;
      const subscribes = await this.subscribeRepository.findBy({
         id: In(clientDto.subscribes)
      })
      const trainers = await this.trainerRepository.findBy({
         id: In(clientDto.trainers)
      })
      client.subcribes = subscribes;
      client.trainers = trainers;
      await this.clientRepository.save(client);
      return client
   }

   findOne(id: number): Promise<Client> {
      return this.clientRepository.findOne({
         where: {id},
         relations: {
            trainers: true, 
            subcribes: true,
         },
      })
   }

   async findAll(): Promise<Client[]> {
       return await this.clientRepository.find({
         relations:{
            subcribes: true,
            trainers: true,
         },
      })
   }

   async update(id: number, updatedClient: Client): Promise<Client> {
      const client = await this.clientRepository.findOne({
         where: {id}
      });
      client.fullname = updatedClient.fullname;
      client.age = updatedClient.age;
      // client.isSubscribe = updatedClient.isSubscribe;
      client.trainers = updatedClient.trainers;
      client.subcribes = updatedClient.subcribes;
      await this.clientRepository.save(client);
      return client;
   }

   remove(id: number){
      this.clientRepository.delete({id});
   }

   async findIncomplete(): Promise<IncompleteClientDto[]>{
      const clients = await this.clientRepository.find();
      const incompleteClients: IncompleteClientDto[] = clients.map((client) => {
         const incompleteClient = new IncompleteClientDto();
         incompleteClient.id = client.id;
         incompleteClient.fullname = client.fullname;
         incompleteClient.age = client.age;
         return incompleteClient;
      });
      return incompleteClients;
   }
}