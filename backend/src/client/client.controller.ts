import { ClientService } from './client.service';
import { Client } from "./client.entity";
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateClientDto } from './dto/create-client.dto';
import { IncompleteClientDto } from './dto/incomplete-client.dto';

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
   update(@Param('email') email: string, @Body() updateClient: Client){
      return this.clientsService.update(email, updateClient)
   }

   @ApiOperation({summary: 'Создание клиента'})
   @Post()
   create(@Body() createClient: CreateClientDto) :Promise<Client>{
      return this.clientsService.create(createClient);
   }

   @ApiOperation({summary: 'Удаление клиента'})
   @Delete(':email')
   remove(@Param('email') email: string){
      return this.clientsService.remove(email);
   }
}