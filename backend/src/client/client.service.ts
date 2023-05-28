import { Injectable } from "@nestjs/common";
import { Client } from './client.entity';
import { InjectRepository } from "@nestjs/typeorm";
import { In, Repository } from "typeorm";
import { Trainer } from "src/trainers/trainers.entity";
import { Subscribe } from "src/subscribe/subscribe.entity";
import { CreateClientDto } from "./dto/create-client.dto";
import { IncompleteClientDto } from './dto/incomplete-client.dto';

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
      client.email = clientDto.email;
      client.password = clientDto.password;
      client.fullName = clientDto.fullName;
      client.age = clientDto.age;
      const subscribes = await this.subscribeRepository.findBy({
         id: In(clientDto.subscribes)
      })
      const trainers = await this.trainerRepository.findBy({
         id: In(clientDto.trainers)
      })
      client.subscribes = subscribes;
      client.trainers = trainers;
      await this.clientRepository.save(client);
      return client
   }

   async findOne(email: string): Promise<Client> {
      return await this.clientRepository.findOne({
         where: {email},
         relations: {
            trainers: true, 
            subscribes: true,
         },
      })
   }

   async findAll(): Promise<Client[]> {
       return await this.clientRepository.find({
         relations:{
            subscribes: true,
            trainers: true,
         },
      })
   }

   async update(email: string, updatedClient: Client): Promise<Client> {
      const client = await this.clientRepository.findOne({
         where: {email}
      });
      client.email = updatedClient.email;
      client.password = updatedClient.password; 
      client.fullName = updatedClient.fullName;
      client.age = updatedClient.age;
      client.trainers = updatedClient.trainers;
      client.subscribes = updatedClient.subscribes;
      await this.clientRepository.save(client);
      return client;
   }

   remove(email: string){
      this.clientRepository.delete({email});
   }

   async findIncomplete(): Promise<IncompleteClientDto[]>{
      const clients = await this.clientRepository.find();
      const incompleteClients: IncompleteClientDto[] = clients.map((client) => {
         const incompleteClient = new IncompleteClientDto();
         incompleteClient.fullName = client.fullName;
         incompleteClient.age = client.age;
         return incompleteClient;
      });
      return incompleteClients;
   }
}