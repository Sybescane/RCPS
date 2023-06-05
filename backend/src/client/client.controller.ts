import { ClientService } from './client.service';
import { Client } from "./client.entity";
import { Body, Controller, Delete, Get, Param, Post, Put, Query, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateClientDto } from './dto/create-client.dto';
import { IncompleteClientDto } from './dto/incomplete-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';

@Controller('clients')
@ApiTags('Клиенты')
export class ClientsController{
   constructor(private readonly clientsService: ClientService){}

   @ApiOperation({summary: 'Поиск всех клиентов'})
   @Get()
   findAll() :Promise<Client[]>{
      return this.clientsService.findAll();
   }

   @ApiOperation({summary: 'Поиск для неавторизованных клиентов'})
   @Get('incomplete')
   findIncomplete() :Promise<IncompleteClientDto[]>{
      return this.clientsService.findIncomplete();
   }

   @ApiOperation({summary: 'Поиск конкретного клиента'})
   @Get(':email')
   findOne(@Param('email') email: string): Promise<Client>{
      return this.clientsService.findOne(email);
   }

   @ApiOperation({summary: 'Изменение клиента'})
   @Put(':email')
   update(@Param('email') email: string, @Body() updateClient: UpdateClientDto){
      return this.clientsService.update(email, updateClient)
   }

   @ApiOperation({summary: 'оформить подписку на абонемент'})
   @Post('addSub')
   addSubcribe(@Query('email') email: string, @Query('idSub') idSub: number): Promise<Client>{
      return this.clientsService.addSubscribe(email, idSub);
   }
   
   @ApiOperation({summary: 'отменить подписку на абонемент'})
   @Post('delSub')
   delSubcribe(@Query('email') email: string, @Query('idSub') idSub: number): Promise<Client>{
      return this.clientsService.delSubscribe(email, idSub);
   }   

   @ApiOperation({summary: 'записаться к тренеру'})
   @Post('addTrainer')
   addTrainer(@Query('email') email: string, @Query('idSub') idTrainer: number): Promise<Client>{
      return this.clientsService.addTrainer(email, idTrainer);
   }

   @ApiOperation({summary: 'отписаться от тренера'})
   @Post('delTrainer')
   delTrainer(@Query('email') email: string, @Query('idSub') idSub: number): Promise<Client>{
      return this.clientsService.delTrainer(email, idSub);
   }

   @ApiOperation({summary: 'Удаление клиента'})
   @Delete(':email')
   remove(@Param('email') email: string){
      return this.clientsService.remove(email);
   }
}