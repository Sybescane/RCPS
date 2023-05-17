import { ClientService } from './client.service';
import { Client } from "./client.entity";
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiMovedPermanentlyResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateClientDto } from './dto/create-client.dto';

@Controller('clients')
@ApiTags('Клиенты')
export class ClientsController{
   constructor(private readonly clientsService: ClientService){}

   @ApiOperation({summary: 'Поиск всех клиентов'})
   @Get()
   findAll() :Promise<Client[]>{
      return this.clientsService.findAll();
   }

   @ApiOperation({summary: 'Поиск конкретного клиента'})
   @Get(':id')
   findOne(@Param('id') id: string){
      this.clientsService.findOne(+id);
   }

   @ApiOperation({summary: 'Изменение клиента'})
   @Put(':id')
   update(@Param('id') id: string, @Body() updateClient: Client){
      return this.clientsService.update(+id, updateClient)
   }

   @ApiOperation({summary: 'Создание клиента'})
   @Post()
   create(@Body() createClient: CreateClientDto) :Promise<Client>{
      return this.clientsService.create(createClient);
   }

   @ApiOperation({summary: 'Удаление клиента'})
   @Delete(':id')
   remove(@Param('id') id: string){
      return this.clientsService.remove(+id);
   }
}