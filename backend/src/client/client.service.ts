import { BadRequestException, Injectable } from "@nestjs/common";
import { Client } from './client.entity';
import { InjectRepository } from "@nestjs/typeorm";
import { In, Repository } from "typeorm";
import { Trainer } from "src/trainers/trainers.entity";
import { Subscribe } from "src/subscribe/subscribe.entity";
import { CreateClientDto } from "./dto/create-client.dto";
import { IncompleteClientDto } from './dto/incomplete-client.dto';
import { Hash } from "crypto";
import { hash } from "argon2";
import { UpdateClientDto } from "./dto/update-client.dto";

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

   async update(email: string, updatedClient: UpdateClientDto): Promise<Client> {
      const client = await this.clientRepository.findOne({
         where: {email}
      });
      client.password = updatedClient.password; 
      client.fullName = updatedClient.fullName;
      client.age = updatedClient.age;
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

   async addSubscribe(email:string, idSubscribe: number){
      const client = await this.findOne(email);
      const subscribe = await this.subscribeRepository.findOneBy({id: idSubscribe});
      client.subscribes.push(subscribe)
      await this.clientRepository.save(client)
      return client
   }

   async delSubscribe(email: string, idSub: number): Promise<Client>{
      const client = await this.findOne(email)
      const index = client.subscribes.findIndex(item => item.id === idSub)
      client.subscribes.splice(index , 1)
      await this.clientRepository.save(client)
      return client
   }

   async addTrainer(email:string, idTrainer: number){
      const client = await this.findOne(email);
      const trainer = await this.trainerRepository.findOneBy({id: idTrainer});
      client.trainers.push(trainer)
      await this.clientRepository.save(client)
      return client
   }

   async delTrainer(email: string, idTrainer: number): Promise<Client>{
      const client = await this.findOne(email)
      const index = client.trainers.findIndex(item => item.id === idTrainer)
      client.trainers.splice(index , 1)
      await this.clientRepository.save(client)
      return client
   }
}